import React from "react";
import { Search, X } from "lucide-react";

export default function ProductSearch({ value = "", onChange }) {
    const handleClear = () => {
        onChange?.("");
    };

    return (
        <div className="relative w-full md:max-w-md">
            <Search
                size={17}
                strokeWidth={2}
                className="
                    pointer-events-none
                    absolute left-3.5 top-1/2
                    -translate-y-1/2
                    text-slate-400
                "
            />

            <input
                type="text"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder="Search products, brand, model..."
                className="
                    w-full
                    rounded-xl
                    border border-green-100
                    bg-white
                    py-3 pl-10 pr-10
                    text-sm text-slate-700
                    outline-none
                    transition-all duration-200
                    placeholder:text-slate-400
                    hover:border-green-200
                    focus:border-green-400
                    focus:ring-2
                    focus:ring-green-100
                "
            />

            {value && (
                <button
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear search"
                    className="
                        absolute right-3 top-1/2
                        flex -translate-y-1/2
                        items-center justify-center
                        rounded-md p-1
                        text-slate-400
                        transition-colors
                        hover:bg-green-50
                        hover:text-[#063b2d]
                    "
                >
                    <X size={15} />
                </button>
            )}
        </div>
    );
}