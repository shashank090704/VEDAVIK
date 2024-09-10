// pages/api/socket.js

import { Server } from 'socket.io';

import messagemodel from '@/models/message';
import { connect } from 'mongoose';

export default async function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket",
    });

    io.on("connection", (socket) => {
      console.log("User connected", socket.id);

      // Join room based on sender and receiver IDs
      socket.on("joinRoom", ({ senderId, receiverId }) => {
        const roomId = [senderId, receiverId].sort().join("_");
        socket.join(roomId);
        console.log(`User ${senderId} joined room ${roomId}`);
      });

      // Listen for messages
      socket.on("privateMessage", async ({ senderId, receiverId, message }) => {
        const roomId = [senderId, receiverId].sort().join("_");

        // Emit message to users in the room
        io.to(roomId).emit("newMessage", { senderId, message });

        // Save the message to the database
        try {
          await connect();
          await messagemodel.create({ senderId, receiverId, message });
          
        } catch (error) {
          console.error("Error saving message to MongoDB", error);
        }
      });

      socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
      });
    });

    res.socket.server.io = io;
    console.log("Socket.io server initialized");
  }

  res.end();
}
