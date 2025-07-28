import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { getReceivedScoketId, io } from "../socket/socket.js";

export const sendMessage = async(req, res) => {
    try{
        const {message} = req.body; //Getting message from body
        const {id: receiverId} = req.params; // Equivalent to req.params.id;
        const senderId = req.user._id; // Getting the sender id from the server Which was save by middleware of protectRoutes

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},//The $all operator ensures that the conversation contains all the specified participant IDs.
        });
        
        if(!conversation){
            conversation = await Conversation.create({ // If the Room does not exits between the User Create it ans the messages are added in below codes
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id); // Save the refrence to Message model
        }

        await Promise.all([conversation.save(), newMessage.save()]); // Run it parallel so will take half time

        //Socket Code
        const receiverSocketId = getReceivedScoketId(receiverId);

        if(receiverSocketId){
            // io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] }, //The $all operator ensures that the conversation contains all the specified participant IDs.
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES //By populating messages, Mongoose will fetch the full message documents related to the conversation instead of just their IDs.

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);// Sending all the messages between the users
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};



export const sendImage = async (req,res) => {
    try{
        const senderId = req.user._id;
        const {id : receiverId} = req.params;
        const imageUrl = req.file.path;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            imageUrl,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id); // Save the refrence to Message model
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        //Socket Code
        const receiverSocketId = getReceivedScoketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
};