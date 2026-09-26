import express from "express";
import { getAllProduct,buyProduct } from "./order.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";


const router = express.Router();

router.get("/products",
    protectRoute,
    getAllProduct);

router.get("/buy/:productId",
    protectRoute,
    buyProduct);


export default router;