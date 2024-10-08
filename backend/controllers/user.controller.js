import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res) => {
    try{

        const loggedInUserId = req.user._id;

        //we want to find all users where the _id field is not equal to ($ne is the MongoDB "not equal" operator) the loggedInUserId.
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }catch(error){
        console.log("Error in User controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}