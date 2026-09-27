import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth.js";

const RoleRoute = ({ allowedRoles }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#f6faf5]">
                <div className="h-9 w-9 animate-spin rounded-full border-4 border-green-100 border-t-[#063b2d]" />

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#063b2d]">
                    E-Code Solutions
                </p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/main/profile" replace />;
    }

    return <Outlet />;
};

export default RoleRoute;