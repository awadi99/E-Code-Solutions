import React from "react";
import { User, ShieldCheck } from "lucide-react";

export default function ProfileHeader({ user }) {
    return (
        <section className="border-b border-green-100 pb-5 sm:pb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">

                {/* User */}
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    
                    {/* Avatar */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#063b2d] text-white sm:h-16 sm:w-16 sm:rounded-2xl">
                        <User
                            size={22}
                            strokeWidth={1.6}
                            className="sm:h-7 sm:w-7"
                        />
                    </div>

                    {/* User Information */}
                    <div className="min-w-0">
                        <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
                            <h1 className="min-w-0 truncate text-xl font-bold text-[#063b2d] sm:text-2xl">
                                {user?.fullName || "User"}
                            </h1>

                            <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-green-700 sm:px-3 sm:text-[9px]">
                                {user?.role || "User"}
                            </span>
                        </div>

                        <p className="mt-1 truncate text-xs text-slate-400 sm:text-sm">
                            {user?.email || "Email not available"}
                        </p>
                    </div>
                </div>

                {/* Status */}
                <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-semibold text-green-700 sm:px-4 sm:py-2 sm:text-xs">
                    <ShieldCheck size={15} className="shrink-0 sm:h-4 sm:w-4" />
                    <span>Active Account</span>
                </div>

            </div>
        </section>
    );
}