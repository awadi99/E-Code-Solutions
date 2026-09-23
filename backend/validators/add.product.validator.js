import Joi from "joi";

const addproductSchema = Joi.object({
    productName: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required(),

    category: Joi.string()
        .valid(
            "Mobile",
            "Laptop",
            "Desktop",
            "Television",
            "Refrigerator",
            "Washing Machine",
            "Tablet",
            "Computer Accessories",
            "Other"
        )
        .required(),

    brand: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    model: Joi.string()
        .trim()
        .min(1)
        .max(100)
        .required(),

    condition: Joi.string()
        .valid(
            "New",
            "Like New",
            "Good",
            "Used",
            "Damaged",
            "Not Working"
        )
        .required(),

    quantity: Joi.number()
        .integer()
        .min(1)
        .required(),

    description: Joi.string()
        .trim()
        .min(10)
        .max(1000)
        .required(),

    expectedPrice: Joi.number()
        .min(0)
        .required(),

    productImage: Joi.string()
        .trim()
        .required(),
});

export default addproductSchema;