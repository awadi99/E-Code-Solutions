import express from "express";
import { register,login, logout } from "./auth.controller.js";
import { signupSchema,loginSchema } from "../../../validators/auth.vaildator.js";
import { protectRoute } from "../../middleware/auth.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";

const router = express.Router();


router.post("/register",validate(signupSchema),register);
router.post("/login",validate(loginSchema),login);
router.post("/logout",protectRoute,logout);

router.get("/me",protectRoute, (req, res) => {
    res.json(req.user);
});


export default router;