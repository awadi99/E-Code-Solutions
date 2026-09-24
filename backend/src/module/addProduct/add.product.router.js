import express from "express";
import { protectRoute } from "../../middleware/auth.middleware.js";
import upload from "../../middleware/multer.middleware.js";
import {
    createProduct,
    deleteProduct,
    getMyProduct
} from "./add.product.controller.js"


const router = express.Router();


router.post("/addproduct", 
    protectRoute,
    upload.single("productImage"),
    createProduct
    
);


router.get("/my-product",
    protectRoute,
    getMyProduct
);

router.delete("/deleteproduct/:productId",
    protectRoute,
    deleteProduct
);

export default router;