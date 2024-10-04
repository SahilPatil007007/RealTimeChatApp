import jwt from "jsonwebtoken";
import "dotenv/config"

const generateAccessToken = (userID, res) => {
    const token = jwt.sign({ userID },process.env.JWT_SECRET , {
      expiresIn: "1hr",
    });

    res.cookie("jwt",token,{
        maxAge:60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    })
}; 

export default generateAccessToken;