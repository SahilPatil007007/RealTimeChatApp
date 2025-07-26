import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    message:{
        type: String,
        default: "",
    },

    imageUrl:{
        type: String,
        default: "",
    }

},{timestamps: true});

messageSchema.pre("save", function (next) {
    if (!this.message && !this.imageUrl) {
      return next(new Error("Message or image must be provided."));
    }
    next();
});

const Message = mongoose.model("Message", messageSchema);

export default Message;