import {
    createProductService,
    getMyProductService,
    deleteProductService
} from "./add.product.service.js";

export const createProduct = async (req, res) => {
    try {
        const product = await createProductService({
            productData: req.body,
            imageFile: req.file,
            user: req.user
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });

    } catch (error) {
        console.error(
            "Create Product Error",
            error
        );

        return res.status(400).json({
            success: false,
            message: error.message
        });
    };
};


export const getMyProduct = async (req, res) => {
    try {
        const result = await getMyProductService(
            req.user
        );

        return res.status(200).json({
            success: true,
            ...result
        });


    } catch (error) {
        console.error(
            " Get My Products Error!",
            error
        );

        return res.status(400).json({
            success: false,
            message: error.message
        });
    };
};


export const deleteProduct = async (req, res) => {
    try {
        const deleteproduct = await deleteProductService({
            productId: req.params.productId,
            user: req.user,
        });

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            deleteProduct
        });

    } catch (error) {

        console.error(
            "Delete Product Error:",
            error
        );
        return res.status(400).json({
            success: false,
            message: error.message
        });
    };
};