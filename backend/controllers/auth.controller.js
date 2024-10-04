import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async(req,res) =>{
    try{
        const {fullName,username,password,gender} = req.body;
        
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username Already Exists"});
        }

        //Hashing the password
        const salt = await bcrypt.genSalt(7);
        const hashPassword = await bcrypt.hash(password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            generateToken(newUser.id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }

    }catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
    console.log("Signup User");
}



export const login = async (req,res) =>{
    try{
        console.log("Login User");

        const {username, password} = req.body;

        const user = await User.findOne({username});

        const isPasswordCorrect = await bcrypt.compare(password, user?.password|| "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or Password"});
        }

        generateToken(user.id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })

    }catch(error){
        console.log("Error in Login conrtroller",error.message);
        res.status(505).json({error: "Internal Server Error"});
    }    
};

export const logout = async (req,res) =>{
    try{
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({message: "Logged out succesfully."});
        console.log("Signout User");
    }catch(error){
        console.log("Error in Login conrtroller",error.message);
        res.status(505).json({error: "Internal Server Error"});      
    }
}