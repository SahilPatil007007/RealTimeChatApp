import mongoose from "mongoose";
import "dotenv/config";


const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
    }catch(error){
        console.log("Error Connecting to MongoDB", error.message);
    }
}

export default connectToMongoDB;