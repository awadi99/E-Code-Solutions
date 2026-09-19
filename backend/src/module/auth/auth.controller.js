import { signupService,signinService } from "./auth.service.js";
import {generateToken} from "../../lib/utils.js";
// import bcrypt from "bcryptjs";
// import NewUser from "./auth.model.js";

export const register = async(req,res)=>{
    try {
        const user = await signupService(req.body);
        generateToken({
            id:user._id,
            role:user.role
        },res);

        res.status(200).json({
            _id:user._id,
            role:user.role,
            fullName: user.fullName,
            email: user.email
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    };
};


export const login = async(req,res)=>{
    try {
        const user = await signinService(req.body);

        generateToken({
            id:user._id,
            role:user.role
        },res);

        res.status(200).json({
            _id:user._id,
            role:user.role,
            fullName: user.fullName,
            email: user.email
        });

    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    };
};

export const logout = async(req,res)=>{
    try {
        res.cookie("jwt", "",{
            httpOnly:true,
            expires: new Date(0)
        });

        res.status(200).json({
            message:"Logged out successfully",
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    };
};