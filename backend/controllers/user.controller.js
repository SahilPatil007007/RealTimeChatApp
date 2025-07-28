import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res) => {
    try{

        const loggedInUserId = req.user._id;

        //we want to find all users where the _id field is not equal to ($ne is the MongoDB "not equal" operator) the loggedInUserId.
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const setUsers = async(req,res) => {
    try{
        const loggedInUserId = req.user._id;
        const { fullName, username } = req.body;
        let imageUrl = "";

        if(req.file){
            imageUrl = req.file.path;
        }

        const findUser = await User.findById(loggedInUserId); 


        findUser.fullName = fullName || findUser.fullName;
        findUser.username = username || findUser.username;

        if(imageUrl){
            findUser.profilePic = imageUrl;
        }

        await findUser.save();
        res.status(200).json("User updated succefully");
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
}