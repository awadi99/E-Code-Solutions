import React from "react";
import {
    Trash2,
    IndianRupee,
    Package,
} from "lucide-react";

export default function UserProductCard({
    product,
    onDelete,
    deleting = false,
}) {
    if (!product) return null;

    return (
        <article
            className="
                group overflow-hidden
                rounded-3xl
                border border-green-100
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-green-200
                hover:shadow-md
            "
        >
            {/* Product Image */}
            <div className="relative h-56 overflow-hidden bg-[#f3f8f2]">
                {product.productImage?.url ? (
                    <img
                        src={product.productImage.url}
                        alt={product.productName}
                        className="
                            h-full w-full
                            object-contain
                            p-6
                            transition-transform duration-500
                            group-hover:scale-[1.04]
                        "
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-slate-300">
                        <Package size={40} strokeWidth={1.4} />
                    </div>
                )}

                {/* Condition */}
                <span
                    className="
                        absolute left-4 top-4
                        rounded-full
                        border border-white/80
                        bg-white/90
                        px-3 py-1.5
                        text-[9px] font-bold
                        uppercase tracking-wider
                        text-green-700
                        shadow-sm
                    "
                >
                    {product.condition}
                </span>

                {/* Category */}
                <span
                    className="
                        absolute bottom-4 left-4
                        rounded-full
                        bg-[#063b2d]
                        px-3 py-1.5
                        text-[9px] font-bold
                        uppercase tracking-wider
                        text-white
                    "
                >
                    {product.category}
                </span>
            </div>

            {/* Product Information */}
            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h3 className="truncate text-base font-bold text-[#063b2d]">
                            {product.productName}
                        </h3>

                        <p className="mt-1 truncate text-xs text-slate-400">
                            {product.brand} · {product.model}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="flex shrink-0 items-center text-green-700">
                        <IndianRupee size={13} strokeWidth={2.2} />

                        <span className="text-sm font-bold">
                            {Number(
                                product.expectedPrice || 0
                            ).toLocaleString("en-IN")}
                        </span>
                    </div>
                </div>

                {/* Quantity + Status */}
                <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-green-100 bg-green-100">
                    <div className="bg-[#f8fbf7] px-3 py-3">
                        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Quantity
                        </p>

                        <p className="mt-1 text-xs font-bold text-slate-700">
                            {product.quantity}{" "}
                            {Number(product.quantity) === 1
                                ? "unit"
                                : "units"}
                        </p>
                    </div>

                    <div className="bg-[#f8fbf7] px-3 py-3">
                        <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            Status
                        </p>

                        <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            Active
                        </div>
                    </div>
                </div>

                {/* Delete */}
                <button
                    type="button"
                    onClick={() => onDelete?.(product)}
                    disabled={deleting}
                    className="
                        mt-4 flex w-full items-center justify-center gap-2
                        rounded-xl
                        border border-red-100
                        bg-white
                        px-4 py-2.5
                        text-[10px] font-bold
                        uppercase tracking-wider
                        text-red-500
                        transition-all duration-200
                        hover:border-red-200
                        hover:bg-red-50
                        hover:text-red-600
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    {deleting ? (
                        <>
                            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-red-200 border-t-red-500" />
                            Deleting
                        </>
                    ) : (
                        <>
                            <Trash2 size={14} />
                            Delete Product
                        </>
                    )}
                </button>
            </div>
        </article>
    );
}