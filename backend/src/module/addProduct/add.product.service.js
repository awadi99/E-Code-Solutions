import {
    createUserProduct,
    findProductById,
    findProductsByUser,
    deleteProductById,
} from "./add.product.repository.js";

import {
    uploadBuffer,
    deleteImage
}from "../../lib/uploadToCloudinary.js"


export const createProductService = async ({
    productData,
    imageFile,
    user
}) => {

    if (!user?._id) {
        throw new Error(
            "Unauthorized"
        );
    };

    if (user.role !== "User") {
        throw new Error("Only users are allowed to create products");
    };


    if (!imageFile?.buffer) {
        throw new Error("Product image is required");
    }

    let uploadImage = null;
    try {

        const product = {
            productName: productData.productName?.trim(),
            category: productData.category,
            brand: productData.brand?.trim(),
            model: productData.model?.trim(),
            condition: productData.condition,
            quantity: Number(productData.quantity),
            description: productData.description?.trim(),
            expectedPrice: Number(
                productData.expectedPrice,
            ),
            createdBy: user._id,
        };

        uploadImage = await uploadBuffer(
            imageFile.buffer
        );

        if (!uploadImage) {
            throw new Error("Product image upload failed");
        };

        product.productImage = {
            url: uploadImage.secure_url,
            publicId: uploadImage.public_id
        };

        const createProduct = await createUserProduct(product);

        return createProduct;


    } catch (error) {
        if (uploadImage?.public_id) {
            try {
                await deleteImage(
                    uploadImage.public_id
                )
            } catch (cleanupError) {
                console.error(
                    "Cloudinary cleanup failed:",
                    cleanupError
                );
            };
        };
        throw error;
    };
};


export const getMyProductService = async (user) => {
    if (!user._id) {
        throw new Error("Unauthorized");
    };

    if (user.role !== "User") {
        throw new Error(
            "Only users can access their products"
        )
    };

    const product = await findProductsByUser(user._id);
    return {
        productCount: product.length,
        product
    };
};

export const deleteProductService = async ({
    productId,
    user
}) => {

    if (!user._id) {
        throw new Error("Unauthorized");
    };

    if (user.role !== "User") {
        throw new Error("Only users are allowed to delete products");
    };

    const product = await findProductById(productId);

    if (!product) {
        throw new Error("Product not found!");
    };

    if (product.createdBy.toString() !== user._id.toString()) {
        throw new Error(
            "You are not allowed to delete this product"
        );
    };

    const deleteProduct = await deleteProductById(productId);

    if (!deleteProduct) {
        throw new Error("Product could not be deleted");
    };

    if (product.productImage?.publicId) {
        try {
            await deleteImage(
                product.productImage.publicId
            )
        } catch (cloudinaryError) {
            console.error(
                "Cloudinary image deletion failed:",
                cloudinaryError
            );
        };
    };

    return deleteProduct;
};
