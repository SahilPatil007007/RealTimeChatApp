import express from "express";
//import dotenv from "dotenv";
import 'dotenv/config';
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',') 
    : [
        "https://chit-chat-in.vercel.app",
        "https://chit-chat-d903x14nl-sahils-projects-93a3d369.vercel.app"
    ];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
})

app.use("/api/auth",authRoutes);

app.use("/api/messages",messageRoutes);

app.use("/api/users", userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
});