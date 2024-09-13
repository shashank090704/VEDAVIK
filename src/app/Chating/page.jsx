
'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import styles from "../../Stylesheet/Chat.module.css";
import Talk from "talkjs";
export default function Page() {
  const chatboxEl = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [senderId, setSenderId] = useState();
  const [receiverId, setReceiverId] = useState();
  const [pusherInstance, setPusherInstance] = useState(null);
 const [ senderdata , setsenderdata ] = useState();
 const [ receiverdata , setreceiverdata ] = useState()
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      const myObject = JSON.parse(storedData);
      setSenderId(myObject.senderId);
      setReceiverId(myObject.receiverId);
    } else {
      console.log('No object found in localStorage.');
    }
  }, []);

  const getInitialMessages = async () => {
    try {
      const res = await axios.post("/api/initialmessages", { senderId, receiverId });
      console.log( res.data , "getinitial message")
      setMessages(res.data.data);
      setreceiverdata(res.data.receiver)
      setsenderdata(res.data.sender)
      // console.log(res.data.data, "resdet initial message");
    } catch (error) {
      console.error("Error fetching initial messages", error);
    }
  };

  useEffect(() => {
    if (senderId && receiverId ) {
      getInitialMessages();
      console.log(messages, "messages");
    }
  }, [senderId, receiverId]);

  useEffect(() => {
    if (senderId && receiverId && senderdata && receiverdata) {
      // console.log( senderdata , " sender data")
      Talk.ready.then(() => {
        // console.log("TalkJS is ready");
        const currentUser = new Talk.User({
          id: senderId,
          // name : senderdata.name,  // Sender's MongoDB ObjectId
          name :  `${senderdata.name} (${senderdata.role})`,
          // name: sender.name,
          // email: sender.email,
          // photoUrl: sender.photoUrl || `https://api.adorable.io/avatars/285/${sender._id}.png`,
          role: senderdata.role,
        });

        const otherUser = new Talk.User({
          id: receiverId,  // Receiver's MongoDB ObjectId
          // name: receiverdata.name,
          name : `${receiverdata.name} (${receiverdata.role})`,
          // email: receiver.email,
          // photoUrl: receiver.photoUrl || `https://api.adorable.io/avatars/285/${receiver._id}.png`,
          role: receiverdata.role
        });

        const session = new Talk.Session({
          appId: "t58oG5hk",  // Replace with your TalkJS App ID
          me: currentUser,
        });

        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationId);

        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        const chatbox = session.createChatbox(conversation);
        chatbox.mount(chatboxEl.current);
        console.log("Chatbox successfully mounted");
      }).catch((error) => {
        console.error("Error with TalkJS initialization:", error);
      });
    }
  }, [senderId, receiverId , senderdata , receiverdata]);
  return (
  
    <>
    <div style={{height : "100vh" , width : "100vw" , backgroundColor : "black" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
    <div ref={chatboxEl} style={{ height: "500px", width: "50%" ,  background: "black"  }} />
    </div>
    </>
  );
}
