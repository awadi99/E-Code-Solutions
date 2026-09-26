import {
    getAllProduct,
    findProductById
}from "./order.repository.js";


export const getAllProductService = async(user)=>{
    if(user.role!=="Company"&&user.role!=="Customer"){
        throw new Error("Only Company and Customer are allowed to access products");
    };
    const product = await getAllProduct();
    return product;
};

export const buyProductService = async (user, productId) => {
    if (user.role !== "Company" && user.role !== "Customer") {
        throw new Error(
            "Only Company and Customer are allowed to buy products"
        );
    }

    const product = await findProductById(productId);

    if (!product) {
        throw new Error("Product not found");
    }

    return {
        product,
        buyer: {
            _id: user._id,
            fullName: user.fullName,
            role: user.role,
        },
        seller: {
            _id: product.createdBy._id,
            fullName: product.createdBy.fullName,
        },
    };
};