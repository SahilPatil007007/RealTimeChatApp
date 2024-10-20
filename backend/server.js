import express from "express";
//import dotenv from "dotenv";
import 'dotenv/config';
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
})

app.use("/api/auth",authRoutes);

app.use("/api/messages",messageRoutes);

app.use("/api/users", userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`)
});