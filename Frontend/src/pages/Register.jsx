import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from "framer-motion";
import { toast } from 'react-toastify';
import { AddLayout } from "../components/common/ui/AuthLayout.jsx"
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Eye,
    EyeOff,
    Leaf,
    Recycle,
    User,
    Users,
} from "lucide-react";

import Input from "../components/common/ui/Input";
import Button from "../components/common/ui/Button";
import { useAuth } from "../hook/useAuth.js";
import signupSchema from "../schema/auth.schema.js";

export function Register() {
    const navigate = useNavigate();

    const { registerUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
        mode: "onChange",
        defaultValues: {
            role: "User"
        }
    });


    const selectedRole = watch("role");
    const fullName = watch("fullName");
    const email = watch("email");
    const password = watch("password");
    const companyName = watch("companyName");
    const agencyName = watch("agencyName");
    const service = watch("service");

    const isGoogleReady =
        (
            selectedRole === "User" ||
            (selectedRole === "Customer" && Boolean(service?.trim())) ||
            (
                selectedRole === "Company" &&
                Boolean(companyName?.trim()) &&
                Boolean(agencyName?.trim()) &&
                Boolean(service?.trim())
            )
        );

    const handleGoogleAuth = () => {

        const backendBase = import.meta.env.VITE_API_BASE_URL
        if (selectedRole === "Company") {
            window.location.href = `${backendBase}/auth/google?role=${selectedRole}&companyName=${companyName}&agencyName=${agencyName}&service=${service}`;
        } else if (selectedRole === "Customer") {
            window.location.href = `${backendBase}/auth/google?role=${selectedRole}&service=${service}`;
        }
        else {
            window.location.href = `${backendBase}/auth/google?role=${selectedRole}`;
        }

    }

    const onSubmit = (data) => {
        registerUser.mutate(data, {
            onSuccess: () => {
                toast.success("Account created successfully! Please login.");
                navigate("/login");
            },
            onError: (error) => {
                toast.error(error.response?.data?.message || "Registration Failed !");
            }
        });
    };

    return (
        <AddLayout
            title="Create Account"
            subtitle="Join us in building a cleaner future through responsible e-waste management"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

                {/* Personal Information */}
                <div className="space-y-4">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                            Personal Information
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Enter your basic account details.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            error={errors.fullName?.message}
                            {...register("fullName")}
                            className="bg-slate-50"
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="johndoe@gmail.com"
                            error={errors.email?.message}
                            {...register("email")}
                            className="bg-slate-50"
                        />

                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            {...register("password")}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="
            absolute right-2 top-1/2
            flex h-9 w-9 -translate-y-1/2
            items-center justify-center
            rounded-md
            text-slate-400
            transition-colors
            hover:bg-slate-100
            hover:text-green-600
        "
                        >
                            {showPassword ? (
                                <EyeOff size={17} />
                            ) : (
                                <Eye size={17} />
                            )}
                        </button>
                    </div>

                    {errors.password?.message && (
                        <p className="mt-2 ml-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                            {errors.password.message}
                        </p>
                    )}

                </div>

                {/* Account Type */}
                <div className="space-y-4">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                            Account Type
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                            Choose the account type that fits you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                        <label className="group cursor-pointer">
                            <input
                                type="radio"
                                value="User"
                                {...register("role")}
                                className="peer sr-only"
                            />

                            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center transition-all peer-checked:border-green-600 peer-checked:bg-green-50 hover:border-green-300">

                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition peer-checked:bg-green-100 peer-checked:text-green-700 group-hover:bg-green-50">
                                    <User size={18} />
                                </div>

                                <p className="mt-3 text-sm font-bold text-slate-700">
                                    User
                                </p>

                                <p className="mt-1 text-[10px] text-slate-400">
                                    List electronics
                                </p>

                            </div>
                        </label>


                        <label className="group cursor-pointer">
                            <input
                                type="radio"
                                value="Customer"
                                {...register("role")}
                                className="peer sr-only"
                            />

                            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center transition-all peer-checked:border-green-600 peer-checked:bg-green-50 hover:border-green-300">

                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                    <Users size={18} />
                                </div>

                                <p className="mt-3 text-sm font-bold text-slate-700">
                                    Customer
                                </p>

                                <p className="mt-1 text-[10px] text-slate-400">
                                    Find services
                                </p>

                            </div>
                        </label>


                        <label className="group cursor-pointer">
                            <input
                                type="radio"
                                value="Company"
                                {...register("role")}
                                className="peer sr-only"
                            />

                            <div className="rounded-xl border border-slate-200 bg-white p-4 text-center transition-all peer-checked:border-green-600 peer-checked:bg-green-50 hover:border-green-300">

                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                    <Building2 size={18} />
                                </div>

                                <p className="mt-3 text-sm font-bold text-slate-700">
                                    Company
                                </p>

                                <p className="mt-1 text-[10px] text-slate-400">
                                    Provide services
                                </p>

                            </div>
                        </label>

                    </div>

                </div>


                {/* Company Information */}

                {selectedRole === "Customer" && (
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                                Service Information
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                Tell us which service you are looking for.
                            </p>
                        </div>

                        <Input
                            label="Service"
                            placeholder="E-Waste Recycling"
                            error={errors.service?.message}
                            {...register("service")}
                            className="bg-slate-50"
                        />
                    </div>
                )}

                {selectedRole === "Company" && (
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                                Company Information
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                Tell us about your organization.
                            </p>
                        </div>

                        <Input
                            label="Company Name"
                            placeholder="ABC Electronics"
                            error={errors.companyName?.message}
                            {...register("companyName")}
                            className="bg-slate-50"
                        />

                        <Input
                            label="Agency Name"
                            placeholder="ABC Recycling Agency"
                            error={errors.agencyName?.message}
                            {...register("agencyName")}
                            className="bg-slate-50"
                        />

                        <Input
                            label="Service"
                            placeholder="E-Waste Recycling"
                            error={errors.service?.message}
                            {...register("service")}
                            className="bg-slate-50"
                        />
                    </div>
                )}

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">

                    <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-green-600"
                    />

                    <span className="text-xs leading-5 text-slate-500">
                        I agree to the{" "}
                        <a
                            href="/toc"
                            className="font-semibold text-[#064e3b] underline underline-offset-2"
                        >
                            Terms and Conditions
                        </a>
                        .
                    </span>

                </label>

                {/* Create Account */}
                <Button
                    type="submit"
                    className="w-full"
                    disabled={registerUser.isPending}
                >

                    {registerUser.isPending ? "Loading..." : "Create Account"}
                </Button>

                <button
                    type="button"
                    onClick={handleGoogleAuth}
                    disabled={!isGoogleReady}
                    className={`
        group flex w-full items-center justify-center gap-3
        rounded-xl border px-4 py-3.5
        transition-all duration-200
        ${isGoogleReady
                            ? `
                    border-slate-200
                    bg-white
                    text-[#063b2d]
                    shadow-sm
                    hover:border-green-300
                    hover:bg-green-50/40
                    hover:shadow-md
                    active:scale-[0.98]
                `
                            : `
                    cursor-not-allowed
                    border-slate-200
                    bg-slate-50
                    text-slate-400
                `
                        }
    `}
                >
                    <svg
                        className={`h-5 w-5 shrink-0 ${!isGoogleReady ? "grayscale opacity-50" : ""
                            }`}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>

                    <span className="text-xs font-black uppercase tracking-widest">
                        Continue with Google
                    </span>
                </button>

                {/* Login */}
                <p className="text-center text-sm text-slate-500">
                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-1 font-bold text-[#064e3b] transition hover:text-green-600"
                    >
                        Sign in
                    </Link>
                </p>

            </form>
        </AddLayout>
    );
}

export default Register;