import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";
import { findUserById } from '../module/auth/auth.repository.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const KEY = process.env.JWT_SECRET;

export const protectRoute = async (req, res,next) => {
    try {

        const token = req.cookies?.jwt || req.headers.authorization?.split(" ")[1];

        // console.log("Extracted Token:", req.cookies);

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized - No token provided"
            });
        };

        let decoded;
        try {
            decoded = jwt.verify(token, KEY);
        } catch (error) {
            console.error("JWT verification failed:", error.message);
            return res.status(401).json({ msg: "Unauthorized - Invalid or expired token" });
        }

        const userId = decoded.id || decoded.userId;
        const user = await findUserById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found!"
            });
        };

        req.user = user;
        next();
    }
    catch (error) {
        console.error("Error in protectRoute middleware:", error);
        res.status(500).json({ msg: "Internal server problem" });
    }
}