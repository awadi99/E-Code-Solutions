import AddProduct from "../addProduct/add.product.model.js";


export const getAllProduct = async ()=>{
    return await AddProduct
    .find()
    .populate("createdBy", "fullName")
    .sort({ createdAt: -1 });
};

export const findProductById = async (productId) => {
    return await AddProduct
        .findById(productId)
        .populate("createdBy", "fullName");
};




