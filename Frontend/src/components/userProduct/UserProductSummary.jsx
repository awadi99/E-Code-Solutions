import React from "react";
import { Package, Boxes, IndianRupee } from "lucide-react";

export default function UserProductSummary({
    productCount = 0,
    totalQuantity = 0,
    totalValue = 0,
}) {
    const summary = [
        {
            label: "Total Products",
            value: productCount,
            icon: Package,
        },
        {
            label: "Total Quantity",
            value: totalQuantity,
            icon: Boxes,
        },
        {
            label: "Product Value",
            value: `₹${Number(totalValue).toLocaleString("en-IN")}`,
            icon: IndianRupee,
        },
    ];

    return (
        <section className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {summary.map(({ label, value, icon: Icon }) => (
                <div
                    key={label}
                    className="
                        rounded-2xl
                        border border-green-100
                        bg-white
                        p-5
                        transition-shadow duration-200
                        hover:shadow-sm
                    "
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                {label}
                            </p>

                            <p className="mt-3 text-2xl font-bold tracking-tight text-[#063b2d]">
                                {value}
                            </p>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                            <Icon size={18} strokeWidth={1.8} />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}