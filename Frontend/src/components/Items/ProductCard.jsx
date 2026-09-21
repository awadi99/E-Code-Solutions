import React from "react";
import { motion } from "framer-motion";
import {
    ShoppingCart,
    UserRound,
    Mail,
    CheckCircle2,
} from "lucide-react";

export default function ProductCard({
    product,
    seller,
    onAddToCart,
}) {
    const {
        title,
        image,
        price,
        condition,
    } = product;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="group"
        >
            {/* Product Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <img
                    src={image || "/img/default.png"}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Condition */}
                {condition && (
                    <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
                            <CheckCircle2 size={13} />
                            {condition}
                        </span>
                    </div>
                )}
            </div>

            {/* Product Information */}
            <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                        {title}
                    </h3>

                    <span className="shrink-0 text-lg font-bold text-slate-900">
                        ₹{price}
                    </span>
                </div>

                {/* Seller Information */}
                {seller && (
                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <UserRound size={14} />

                            <span>
                                {seller.name ||
                                    seller.fullName ||
                                    "Seller"}
                            </span>
                        </div>

                        {seller.email && (
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Mail size={14} />

                                <span>
                                    {seller.email}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Add To Cart */}
                <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                    <ShoppingCart size={17} />
                    Add to cart
                </button>
            </div>
        </motion.article>
    );
}