import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getUsersForSidebar, setUsers } from "../controllers/user.controller.js";
import {uploadProfile} from "../middleware/uploadMiddleware.js"
const router = express.Router();

router.get("/", protectRoutes, getUsersForSidebar);
router.post("/", protectRoutes, uploadProfile.single("profilePic"), setUsers);

export default router;