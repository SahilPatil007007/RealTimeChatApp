import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";


export const uploadProfile = multer({
    storage : new CloudinaryStorage({
        cloudinary,
        params: {
            folder: "chat-app-profile-pics",
            allowed_formats: ["jpg","png","jpeg"],
        },
    }),
});
    

export const uploadChatImage = multer({
    storage : new CloudinaryStorage({
        cloudinary,
        params: {
            folder: "chat-app-chat-images",
            allowed_formats: ["jpg","png","jpeg"],
        },
    }),
});
