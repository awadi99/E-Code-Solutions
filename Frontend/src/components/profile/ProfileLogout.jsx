import React from "react";
import { LogOut, ArrowUpRight } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function ProfileLogout() {
    const handleLogout = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/auth/logout`,
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Logout failed");
            }

            window.location.href = "/sign-in";
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <section className="mt-8 border-t border-green-100 pt-6">
            <button
                type="button"
                onClick={handleLogout}
                className="group flex w-full items-center justify-between border border-red-100 bg-white px-5 py-4 text-left transition-colors hover:bg-red-50"
            >
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
                        <LogOut size={17} />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-slate-700">
                            Logout
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                            Sign out from your account.
                        </p>
                    </div>
                </div>

                <ArrowUpRight
                    size={17}
                    className="text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-red-500"
                />
            </button>
        </section>
    );
}