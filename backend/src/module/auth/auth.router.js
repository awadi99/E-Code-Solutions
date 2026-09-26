import express from "express";
import { register,login, logout,googleCallback } from "./auth.controller.js";
import { signupSchema,loginSchema } from "../../../validators/auth.vaildator.js";
import { protectRoute } from "../../middleware/auth.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import passport from "passport";
import rateLimit from 'express-rate-limit';

const router = express.Router();


router.post("/register",validate(signupSchema),register);
router.post("/login",validate(loginSchema),login);
router.post("/logout",protectRoute,logout);

router.get("/me",protectRoute, (req, res) => {
    res.json(req.user);
});


router.get("/google",(req,res,next)=>{
    const {
        role,  
        companyName,
        agencyName,
        service,
    }=req.query;


    const passportOptions ={
        scope:["profile","email"],
        prompt: "select_account",

        state: JSON.stringify({
            role: role || "User",
            companyName,
            agencyName,
            service,
        }),
    };
    
    passport.authenticate("google", passportOptions)(req, res, next);
});


router.get(
    "/google/callback",
    passport.authenticate("google", {
        session: false,
        failureRedirect:
            "https://e-code-solutions-srr9.onrender.com/sign-in?error=auth_failed",
    }),
    googleCallback
);


export default router;