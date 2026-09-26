import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/apiClient.js";
import { Recycle } from "lucide-react";

const GoogleAuthSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        const token = searchParams.get("token");
        const redirectPath =
            searchParams.get("redirect") || "/main";

        if (!token) {
            navigate("/sign-in?error=auth_failed", { replace: true });
            return;
        }

        localStorage.setItem("jwt", token);

        apiClient
            .get("/auth/me")
            .then(({ data }) => {
                queryClient.setQueryData(["authUser"], data);

                setTimeout(() => {
                    navigate(redirectPath, { replace: true });
                }, 700);
            })
            .catch(() => {
                localStorage.removeItem("jwt");
                navigate("/sign-in?error=auth_failed", {
                    replace: true,
                });
            });
    }, [navigate, queryClient, searchParams]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f6faf5] px-6">
            <div className="w-full max-w-md text-center">

                {/* Logo */}
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#063b2d] shadow-lg shadow-green-900/10">
                    <Recycle
                        size={38}
                        strokeWidth={1.8}
                        className="text-green-400 animate-pulse"
                    />
                </div>

                {/* Brand */}
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-700">
                    E-Code Solutions
                </p>

                {/* Heading */}
                <h2 className="text-2xl font-bold tracking-tight text-[#063b2d] sm:text-3xl">
                    Signing you in...
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    Please wait while we securely set up your account
                    and prepare your dashboard.
                </p>

                {/* Loading */}
                <div className="mx-auto mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-green-100">
                    <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-green-500" />
                </div>

                {/* Small status */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    Authenticating with Google
                </div>
            </div>

            <style>{`
                @keyframes loading {
                    0% {
                        transform: translateX(-120%);
                    }

                    100% {
                        transform: translateX(220%);
                    }
                }
            `}</style>
        </div>
    );
};

export default GoogleAuthSuccess;