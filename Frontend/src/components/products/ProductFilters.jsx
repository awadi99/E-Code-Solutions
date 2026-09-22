import React from "react";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

const categories = [
    "All",
    "Mobile",
    "Laptop",
    "Desktop",
    "Television",
    "Refrigerator",
    "Washing Machine",
    "Tablet",
    "Computer Accessories",
    "Other",
];

const conditions = [
    "All",
    "New",
    "Like New",
    "Good",
    "Used",
    "Damaged",
    "Not Working",
];

export default function ProductFilters({
    category = "All",
    condition = "All",
    onCategoryChange,
    onConditionChange,
    onReset,
}) {
    const hasFilters = category !== "All" || condition !== "All";

    return (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            {/* Filter label */}
            <div className="hidden items-center gap-2 text-sm font-semibold text-[#063b2d] sm:flex">
                <SlidersHorizontal size={16} />
                <span>Filter</span>
            </div>

            {/* Category */}
            <select
                value={category}
                onChange={(e) => onCategoryChange?.(e.target.value)}
                className="
                    w-full rounded-xl
                    border border-green-100
                    bg-white
                    px-4 py-2.5
                    text-sm text-slate-700
                    outline-none
                    transition-all duration-200
                    hover:border-green-200
                    focus:border-green-400
                    focus:ring-2 focus:ring-green-100
                    sm:w-auto
                "
            >
                {categories.map((item) => (
                    <option key={item} value={item}>
                        {item === "All" ? "All Categories" : item}
                    </option>
                ))}
            </select>

            {/* Condition */}
            <select
                value={condition}
                onChange={(e) => onConditionChange?.(e.target.value)}
                className="
                    w-full rounded-xl
                    border border-green-100
                    bg-white
                    px-4 py-2.5
                    text-sm text-slate-700
                    outline-none
                    transition-all duration-200
                    hover:border-green-200
                    focus:border-green-400
                    focus:ring-2 focus:ring-green-100
                    sm:w-auto
                "
            >
                {conditions.map((item) => (
                    <option key={item} value={item}>
                        {item === "All" ? "All Conditions" : item}
                    </option>
                ))}
            </select>

            {/* Reset */}
            {hasFilters && (
                <button
                    type="button"
                    onClick={onReset}
                    className="
                        inline-flex items-center
                        justify-center gap-2
                        rounded-xl
                        border border-green-100
                        bg-white
                        px-4 py-2.5
                        text-xs font-semibold
                        text-[#063b2d]
                        transition-all duration-200
                        hover:border-green-200
                        hover:bg-green-50
                    "
                >
                    <RotateCcw size={14} />
                    Reset
                </button>
            )}
        </div>
    );
}