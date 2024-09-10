// pages/index.js

import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { getSession } from 'next-auth/react';
import dbConnect from '../lib/mongodb';
import Message from '../models/Message';

let socket;

export default function Page({senderId , receiverId}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");
  const [userId, setUserId] = useState(senderId);

  useEffect(() => {
    const initSocket = async () => {
      // const session = await getSession();
      // setUserId(session?.user?.id); // Assuming you have user authentication

      socket = io({
        path: "/api/socket",
      });

      if (userId && receiverId) {
        socket.emit("joinRoom", { senderId: userId, receiverId });
      }

      socket.on("newMessage", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });

      return () => {
        socket.disconnect();
      };
    };

    initSocket();
  }, [userId, receiverId]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("privateMessage", {
        senderId: userId,
        receiverId,
        message,
      });
      setMessage(""); // Clear message input after sending
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Private Chat</h1>
      <div style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.senderId === userId ? "You" : "Them"}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const receiverId = context.query.receiverId; // Pass the receiver's ID via URL
  const senderId = context.req.session?.user?.id; // Assume you have a session for the logged-in user

  await dbConnect();

  // Fetch chat history between two users
  const messages = await Message.find({
    $or: [
      { senderId, receiverId },
      { senderId: receiverId, receiverId: senderId },
    ],
  }).sort({ createdAt: 1 });

  return {
    props: {
      receiverId,
      initialMessages: JSON.parse(JSON.stringify(messages)),
    },
  };
}
