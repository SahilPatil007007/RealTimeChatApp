import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoutes = async(req,res,next) =>{
    try{

        const token = req.cookies.jwt; // Geeting the Toke which is store in Cookie

        if(!token){
           return res.status(401).json({error: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password"); //Get the user Excluding his/her Password

        if(!user){
            return res.status(404).json({error: "User not Found"});
        }
        
        // Don't have to get the data from database all the time
        req.user = user; //attaches the authenticated user's details to the request object, making the user's information accessible to any subsequent middleware or route handlers.
        
        next();// Executes the further processes after the call

    }catch(error){
        console.log("Error in ProtectedRoutes Middleware: ",error.message);
        res.status(500).json({error: "Internal server error"}); // Server Error
    }
}

export default protectRoutes;