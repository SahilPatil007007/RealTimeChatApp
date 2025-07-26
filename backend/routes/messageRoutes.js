import express from "express";
import { getMessages, sendImage, sendMessage } from "../controllers/message.controller.js";
import protectRoutes from "../middleware/protectRoutes.js";
import {uploadChatImage} from "../middleware/uploadMiddleware.js"

const router = express.Router();

router.get("/:id", protectRoutes, getMessages); // First verify if the token is valid and then get the messages
router.post("/send/:id", protectRoutes, sendMessage);  // First verify if the token is valid and then post the messages
router.post("/send/pic/:id",protectRoutes, uploadChatImage.single("photo"), sendImage);

export default router;