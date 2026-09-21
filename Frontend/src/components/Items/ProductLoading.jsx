import React from "react";

export default function ProductLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-green-600" />

                {/* Text */}
                <p className="mt-5 text-sm font-medium text-slate-500">
                    Loading products...
                </p>
            </div>
        </div>
    );
}