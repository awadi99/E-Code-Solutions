import { signupService, signinService } from "./auth.service.js";
import { generateToken } from "../../lib/utils.js";
// import bcrypt from "bcryptjs";
// import NewUser from "./auth.model.js";

export const register = async (req, res) => {
    try {
        const user = await signupService(req.body);
        generateToken({
            id: user._id,
            role: user.role
        }, res);

        res.status(200).json({
            _id: user._id,
            role: user.role,
            fullName: user.fullName,
            email: user.email
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    };
};


export const login = async (req, res) => {
    try {
        const user = await signinService(req.body);

        generateToken({
            id: user._id,
            role: user.role
        }, res);

        res.status(200).json({
            _id: user._id,
            role: user.role,
            fullName: user.fullName,
            email: user.email
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    };
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            httpOnly: true,
            expires: new Date(0)
        });

        res.status(200).json({
            message: "Logged out successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
};


export const googleCallback = async (req, res) => {
    try {
        const token = generateToken({
            id: req.user._id,
            role:req.user.role
        }, res);

        const frontendUrl = process.env.CLIENT_URL || "http://localhost:5173";
        let targetPath = "/items";

        if (req.user.role === "User") {
            targetPath = "/addproducts"
        }
        // else if(req.user.role==="Company" || req.user.role==="Customer"){
        //     targetPath="/items"
        // }
        else {
            targetPath = "/items";

        };

        res.redirect(`${frontendUrl}/auth/google/success?token=${token}&redirect=${targetPath}`);


    } catch (error) {
        console.error("Google Callback Error:", error);
        res.redirect("http://localhost:5173/sign-up?error=auth_failed");
    }
};