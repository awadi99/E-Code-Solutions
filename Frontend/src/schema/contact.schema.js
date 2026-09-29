import { z } from "zod";


const emailRegex = /^(?!.*\.\.)[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const contactSchema = z.object({

    name:z
    .string()
    .trim()
    .min(4, "Full name must be at least 4 characters")
    .max(50, "Full name is too long"),



    email: z
        .string()
        .regex(emailRegex, "Invalid email format")
        .toLowerCase()
        .trim(),


    message:z
    .string()
    .trim()
    .min(10,"message must be at least 10 characters")
    .max(2000, "message is too long"),

    
})

export default contactSchema;