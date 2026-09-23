import { v2 as cloudinary } from 'cloudinary';
import AddProduct from "./add.product.model.js";
import {
    createUserProduct,
    findProductById,
    findProductsByUser,
    deleteProductById,
} from "./add.product.repository.js";


export const createProductService = async ({
    productData,
    imageFile,
    user
})=>{

    if(!user?._id){
        throw new Error(
            "Only users are allowed to create products"
        );
    }

    if (!imageFile?.buffer) {
        throw new Error("Product image is required");
    }

    let uploadImage = null;
    try {
            
    } catch (error) {
        
    }
}