import mongoose from "mongoose";

const AddProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            enum: [
                "Mobile",
                "Laptop",
                "Desktop",
                "Television",
                "Refrigerator",
                "Washing Machine",
                "Tablet",
                "Computer Accessories",
                "Other",
            ],
        },

        brand: {
            type: String,
            required: true,
            trim: true,
        },

        model: {
            type: String,
            required: true,
            trim: true,
        },

        condition: {
            type: String,
            required: true,
            enum: [
                "New",
                "Like New",
                "Good",
                "Used",
                "Damaged",
                "Not Working",
            ],
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        expectedPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        productImage: {
            url: {
                type: String,
                required: true,
                trim: true,
            },
            publicId: {
                type: String,
                required: true,
                trim: true,
            },
        },

        // User who created the product
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NewUser",
            required: true,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);

const AddProduct = mongoose.model("AddProduct", AddProductSchema);

export default AddProduct;