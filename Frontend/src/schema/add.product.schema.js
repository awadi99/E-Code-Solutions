import z from "zod";

export const addproductSchema = z.object({
    productName: z
        .string()
        .trim()
        .min(2, "Product name must be at least 2 characters")
        .max(100, "Product name is too long"),

    category: z
        .string()
        .refine(
            (value) =>
                [
                    "Mobile",
                    "Laptop",
                    "Desktop",
                    "Television",
                    "Refrigerator",
                    "Washing Machine",
                    "Tablet",
                    "Computer Accessories",
                    "Other",
                ].includes(value),
            {
                message: "Please select a valid category",
            }
        ),

    brand: z
        .string()
        .trim()
        .min(2, "Brand name must be at least 2 characters")
        .max(50, "Brand name is too long"),

    model: z
        .string()
        .trim()
        .min(1, "Model is required")
        .max(100, "Model is too long"),

    condition: z
        .string()
        .refine(
            (value) =>
                [
                    "New",
                    "Like New",
                    "Good",
                    "Used",
                    "Damaged",
                    "Not Working",
                ].includes(value),
            {
                message: "Please select a valid condition",
            }
        ),

    quantity: z
        .coerce
        .number()
        .int("Quantity must be a whole number")
        .min(1, "Quantity must be at least 1"),

    description: z
        .string()
        .trim()
        .min(10, "Description must be at least 10 characters")
        .max(1000, "Description is too long"),

    expectedPrice: z
        .coerce
        .number()
        .min(1, "Expected price cannot be negative"),

        productImage: z
        .instanceof(File, {
            message: "Please select one product image",
        })
        .refine(
            (file) =>
                ["image/jpeg", "image/png", "image/webp"].includes(
                    file.type
                ),
            {
                message: "Only JPEG, PNG, and WebP images are allowed",
            }
        )
        .refine(
            (file) => file.size <= 5 * 1024 * 1024,
            {
                message: "Image size must be less than 5MB",
            }
        ),
});