import React from "react";
import {
    ShoppingCart,
    Package,
    ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onBuy }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/main/products/${product._id}`);
    };

    const handleBuy = (e) => {
        e.stopPropagation();
        onBuy?.(product);
    };

    return (
        <article
            onClick={handleCardClick}
            className="
                group cursor-pointer overflow-hidden
                rounded-2xl
                border border-green-100
                bg-white
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-green-200
                hover:shadow-md
            "
        >
            {/* Product Image */}
            <div className="relative h-52 overflow-hidden bg-[#f6faf5]">
                {product.productImage?.url ? (
                    <img
                        src={product.productImage.url}
                        alt={product.productName}
                        className="
                            h-full w-full
                            object-contain p-6
                            transition-transform duration-300
                            group-hover:scale-[1.03]
                        "
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <Package
                            size={48}
                            strokeWidth={1.5}
                            className="text-green-200"
                        />
                    </div>
                )}

                {/* Condition */}
                <span
                    className="
                        absolute left-3 top-3
                        rounded-full
                        bg-[#063b2d]
                        px-3 py-1
                        text-[10px]
                        font-bold uppercase
                        tracking-wide text-white
                    "
                >
                    {product.condition}
                </span>

                {/* Category */}
                <span
                    className="
                        absolute bottom-3 left-3
                        rounded-full
                        border border-white/80
                        bg-white/90
                        px-3 py-1
                        text-[9px]
                        font-bold uppercase
                        tracking-wider
                        text-green-700
                    "
                >
                    {product.category}
                </span>
            </div>

            {/* Product Content */}
            <div className="p-5">
                <p className="
                    text-[10px] font-bold uppercase
                    tracking-[0.15em] text-slate-400
                ">
                    {product.category}
                </p>

                <h3 className="
                    mt-1 truncate text-base font-bold
                    text-[#063b2d]
                ">
                    {product.productName}
                </h3>

                <p className="mt-1 truncate text-xs text-slate-400">
                    {product.brand} · {product.model}
                </p>

                {/* Product Info */}
                <div className="
                    my-4
                    border-y border-green-50
                    py-3
                ">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">
                            Available
                        </span>

                        <span className="font-semibold text-[#063b2d]">
                            {product.quantity}{" "}
                            {Number(product.quantity) === 1
                                ? "unit"
                                : "units"}
                        </span>
                    </div>
                </div>

                {/* Price + Buy */}
                <div className="
                    flex items-end
                    justify-between gap-3
                ">
                    <div>
                        <p className="
                            text-[10px] uppercase
                            tracking-wider text-slate-400
                        ">
                            Price
                        </p>

                        <p className="
                            text-xl font-bold
                            text-[#063b2d]
                        ">
                            ₹
                            {Number(
                                product.expectedPrice || 0
                            ).toLocaleString("en-IN")}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleBuy}
                        className="
                            inline-flex items-center gap-2
                            rounded-xl
                            bg-[#063b2d]
                            px-4 py-2.5
                            text-xs font-semibold
                            text-white
                            transition-all duration-200
                            hover:bg-green-800
                            active:scale-[0.98]
                        "
                    >
                        <ShoppingCart size={15} />
                        Buy
                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </article>
    );
}