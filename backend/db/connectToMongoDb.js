import mongoose from "mongoose";
import "dotenv/config";
import { error } from "console";

const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error Connecting to MongoDB", error.message);
    }
}

export default connectToMongoDB;