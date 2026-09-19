import Joi from 'joi';

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const signupSchema = Joi.object({

    role: Joi.string()
        .valid("User", "Customer", "Company")
        .required(),

    fullName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            "string.empty": "Full name is required",
            "string.min": "Full name must be at least 3 characters"
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Invaild email format",
            "string.empty": "Email is required"
        }),

    password: Joi.string()
        .pattern(passwordRegex)
        .required()
        .messages({
            "string.pattern.base":
                "Password must contain uppercase lowercase, number and special character",
            "string.empty": "Password is required"
        }),
    companyName: Joi.string()
        .trim()
        .when("role", {
            is: "Company",
            then: Joi.required(),
            otherwise: Joi.optional()
        }),

    agencyName: Joi.string()
        .trim()
        .when("role", {
            is: "Company",
            then: Joi.required(),
            otherwise: Joi.optional()
        }),

    service: Joi.string()
        .trim()
        .when("role", {
            is: Joi.valid("Company", "Customer"),
            then: Joi.required(),
            otherwise: Joi.optional()
        })
});


export const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .required()
});