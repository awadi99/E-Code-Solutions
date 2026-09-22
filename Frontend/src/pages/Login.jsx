import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import AddLayout from "../components/common/ui/AuthLayout";
import {
    ArrowLeft,
    Eye,
    EyeOff,
} from "lucide-react";

import Button from "../components/common/ui/Button";
import Input from "../components/common/ui/Input";
import { useAuth } from "../hook/useAuth";
import loginSchema from "../schema/auth.login.schema.js";




export function Login() {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
    });


    const handleGoogleAuth =()=>{
        const backendBase = import.meta.env.VITE_API_BASE_URL;
        window.location.href=`${backendBase}/auth/google`
    };

    const onSubmit =(data)=>{
        loginUser.mutate(data,{
            onSuccess:()=>{
                toast.success("Login successful! Welcome back.")
                navigate("/items")
            },
            onError:(error)=>{
                toast.error(error.response?.data?.message|| "Login failed. Please try again.")
            }
        });
    };


    return (
        <AddLayout
            title="Sign in to your account."
            subtitle="Welcome back. Continue your journey toward a cleaner, greener future."
            direction="right"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Section Heading */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                        Personal Information
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Enter your account details to continue.
                    </p>
                </div>

                {/* Email */}
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    error={errors.email?.message}
                    {...register("email")}
                    className="bg-slate-50"
                />

                {/* Password */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label
                            htmlFor="pass"
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500"
                        >
                            Password
                        </label>


                    </div>

                    <div className="relative">
                        <input
                            id="pass"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password")}
                            className={`
                        w-full rounded-xl border
                        bg-slate-50
                        px-4 py-3 pr-12
                        text-sm text-slate-900
                        outline-none
                        transition-all duration-200
                        placeholder:text-slate-400
                        focus:border-green-500
                        focus:ring-4 focus:ring-green-500/10
                        ${errors.password
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-slate-200"
                                }
                    `}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                            className="
                        absolute right-2 top-1/2
                        flex h-9 w-9
                        -translate-y-1/2
                        items-center justify-center
                        rounded-lg
                        text-slate-400
                        transition-all duration-200
                        hover:bg-slate-100
                        hover:text-green-600
                    "
                        >
                            {showPassword ? (
                                <EyeOff size={17} strokeWidth={2} />
                            ) : (
                                <Eye size={17} strokeWidth={2} />
                            )}
                        </button>
                    </div>

                    {errors.password?.message && (
                        <p className="mt-2 ml-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Terms */}
                <label
                    className="
                flex cursor-pointer items-start gap-3
                rounded-xl
                border border-slate-200
                bg-slate-50
                px-4 py-3
                transition-colors
                hover:border-green-200
            "
                >
                    <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-green-600"
                        
                    />

                    <span className="text-xs leading-5 text-slate-500">
                        I agree to the{" "}
                        <a
                            href="/toc"
                            className="font-semibold text-[#064e3b] underline underline-offset-2 hover:text-green-600"
                        >
                            Terms and Conditions
                        </a>
                        .
                    </span>
                </label>

                {/* Sign In Button */}
                <Button
                    type="submit"
                    className="w-full"
                    loading={loginUser.isPending}
                    disabled={loginUser.isPending}
                >
                    Sign in
                </Button>

                <button
                    type="button"
                    onClick={handleGoogleAuth}

                    className="
        group flex w-full items-center justify-center gap-3
        rounded-xl border px-4 py-3.5
        transition-all duration-200

                    border-slate-200
                    bg-white
                    text-[#063b2d]
                    shadow-sm
                    hover:border-green-300
                    hover:bg-green-50/40
                    hover:shadow-md
                    active:scale-[0.98]

                        ">
                    <svg
                        className="h-5 w-5 shrink-0"
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
                <p className="text-center text-sm text-slate-500">
                Not registered?

                    <Link
                        to="/register"
                        className="ml-1 font-bold text-[#064e3b] transition hover:text-green-600"
                    >
                        Create account
                    </Link>
                </p>

            </form>
            <button
                    onClick={()=>navigate("/")}
                    className=" flex  justify-center items-center gap-2 mt-5 text-[13px] font-semibold text-gray-600/60 transition-colors hover:text-green-700"
                >
                    <ArrowLeft size={15}/>
                    Back to Home
                </button>
        </AddLayout>
    );
}
export default Login;