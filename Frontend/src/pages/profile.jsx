import React, { useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileRole from "../components/profile/ProfileRole";
import ProfileLogout from "../components/profile/ProfileLogout";
import { useAuth } from "../hook/useAuth.js";
import { use } from "react";


export default function Profile() {
    const { user, isPending, isError } = useAuth();
    if (isPending) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6faf5]">
                <div className="relative flex items-center justify-center">
                    <div className="h-12 w-12 animate-spin rounded-full border-2 border-green-100 border-t-[#063b2d]" />

                    <div className="absolute inset-0 m-auto h-6 w-6 animate-pulse rounded-full bg-green-500/20" />
                </div>
            </div>
        );
    };

    if (isError || !user) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f6faf5] px-4">
                <p className="text-center text-sm font-medium tracking-tight text-slate-500">
                    Session expired or data missing.
                </p>

                <button
                    type="button"
                    onClick={() => (window.location.href = "/sign-in")}
                    className="rounded-xl bg-[#063b2d] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition-colors hover:bg-green-800"
                >
                    Login Again
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f6faf5]">
            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

                <ProfileHeader user={user} />

                <ProfileInfo user={user} />

                <ProfileRole user={user} />

                <ProfileLogout />

            </div>
        </div>
    );
}