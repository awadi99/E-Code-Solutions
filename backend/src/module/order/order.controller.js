import {
    getAllProductService,
    buyProductService
} from "./order.service.js";



export const getAllProduct = async (req, res) => {
    try {
        const user = req.user;
        const product = await getAllProductService(user);

        return res.status(201).json({
            success: true,
            product,
            message: "Products fetched successfully"
        })
    } catch (error) {
        console.error(
            " Get All Products Error!",
            error
        );
        return res.status(400).json({
            success:false,
            message:error.message
        });
    };
};

export const buyProduct = async(req,res)=>{
    try {
        const user = req.user;
        const {productId}= req.params;

        const result = await buyProductService(user,productId);
        return res.status(200).json({
            success:true,
            ...result,
            message:"Product selected successfully"
        })
    } catch (error) {
        console.error(
            "Buy Product Error"
        );
        return res.status(400).json({
            success:false,
            message:error.message
        });
    };
};