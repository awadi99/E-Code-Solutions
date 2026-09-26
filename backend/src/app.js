import express from 'express';
import cors from "cors";
import passport from 'passport';
import authRoutes from "./module/auth/auth.router.js";
import userRoutes from "./module/addProduct/add.product.router.js";
import orderRoutes from './module/order/order.router.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import "./module/auth/google.strategy.js";


dotenv.config();


// express connect
const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    "http://localhost:5173",
    "https://your-frontend.vercel.app",       // <-- Replace with your actual deployed frontend URL
    "https://your-frontend.onrender.com"
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));

app.use(express.json({ limit: "25mb" })); // increase limit to allow base64 images
app.use(cookieParser());
app.use(passport.initialize());

app.get("/", (req, res) => {
    res.send("API is running");
})

app.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

app.use("/api/auth",authRoutes);

app.use("/api/user",userRoutes);

app.use("/api/order",orderRoutes);

export default app;