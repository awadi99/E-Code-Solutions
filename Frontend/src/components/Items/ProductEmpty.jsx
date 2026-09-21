import React from "react";
import { PackageOpen } from "lucide-react";

export default function ProductEmpty() {
    return (
        <div className="flex min-h-[350px] flex-col items-center justify-center border-t border-slate-200 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                <PackageOpen size={30} strokeWidth={1.7} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                No products found
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                There are currently no products available.
                Add an electronic item to make it available here.
            </p>
        </div>
    );
}