import AddProduct from './add.product.model.js';

export const findProductById = async(productId)=>{
    return await AddProduct.findById(productId);
};

export const findProductsByUser = async(userId)=>{
    return await AddProduct.find({
        createdBy: userId
    }).sort({ createdAt: -1 });
};

export const countProductsByUser = async (userId) => {
    return await AddProduct.countDocuments({
        createdBy: userId,
    });
};

export const createUserProduct = async(data)=>{
    return await AddProduct.create(data);
};

export const deleteProductById = async (productId) => {
    return await AddProduct.findByIdAndDelete(productId);
};
