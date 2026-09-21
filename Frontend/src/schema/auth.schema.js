import { z } from "zod";

const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex =
    /^(?!.*\.\.)[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const signupSchema = z
    .object({
        role: z.enum(["User", "Customer", "Company"], {
            message: "Please select a valid role",
        }),

        fullName: z
            .string()
            .trim()
            .min(4, "Full name must be at least 4 characters")
            .max(50, "Full name is too long"),

        email: z
            .string()
            .trim()
            .toLowerCase()
            .regex(emailRegex, "Invalid email format"),

        password: z
            .string()
            .regex(
                passwordRegex,
                "Password must include uppercase, lowercase, number, and special character"
            ),

        companyName: z
            .string()
            .trim()
            .optional(),

        agencyName: z
            .string()
            .trim()
            .optional(),

        service: z
            .string()
            .trim()
            .optional(),
    })
    .superRefine((data, ctx) => {
        // Company validation
        if (data.role === "Company") {
            if (!data.companyName) {
                ctx.addIssue({
                    code: "custom",
                    path: ["companyName"],
                    message: "Company name is required",
                });
            }

            if (!data.agencyName) {
                ctx.addIssue({
                    code: "custom",
                    path: ["agencyName"],
                    message: "Agency name is required",
                });
            }

            if (!data.service) {
                ctx.addIssue({
                    code: "custom",
                    path: ["service"],
                    message: "Service is required",
                });
            }
        }

        // Customer validation
        if (data.role === "Customer") {
            if (!data.service) {
                ctx.addIssue({
                    code: "custom",
                    path: ["service"],
                    message: "Service is required",
                });
            }
        }
    });

export default signupSchema;