import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',') 
    : [
        "https://chit-chat-in.vercel.app",
        "https://chit-chat-d903x14nl-sahils-projects-93a3d369.vercel.app"
    ];

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: allowedOrigins,
        methods: ["GET", "POST"],
        credentials: true
    },
});

const userSocketMap = {}; // {userId: socketId}

export const getReceivedScoketId = (receiverId) => {
    return userSocketMap[receiverId];
}

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    //io.emit() is used to send events to all the connected users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socket.on() is used to listen to the events. can be used both on Client and Server side
    socket.on("disconnect", () => {
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export {app, io, server};