import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserProductHeader() {
    const navigate = useNavigate();
    return (
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            {/* Heading */}
            <div>
                <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-6 bg-green-500" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-green-600">
                        Inventory
                    </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-[#063b2d] sm:text-4xl">
                    My Products
                </h1>

                <p className="mt-2 text-sm text-slate-400">
                    Manage your published electronic products.
                </p>
            </div>

            {/* Add Product */}
            <button
                type="button"
                onClick={()=>navigate("/main/addproduct/new")}
                className="
                    inline-flex w-fit items-center gap-2
                    rounded-xl
                    bg-[#063b2d]
                    px-5 py-3
                    text-xs font-bold text-white
                    transition-colors duration-200
                    hover:bg-green-800
                "
            >
                <Plus size={16} />
                Add Product
            </button>
        </header>
    );
}