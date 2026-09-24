import React from "react";
import { Package } from "lucide-react";
import UserProductCard from "./UserProductCard";

export default function UserProductList({
    products = [],
    onDelete,
    deletingId,
}) {
    return (
        <section>
            {/* Section Header */}
            <div className="mb-5">
                <h2 className="text-lg font-bold text-[#063b2d]">
                    Published Products
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                    All products currently listed by you.
                </p>
            </div>

            {/* Empty State */}
            {products.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-green-200 bg-white px-6 py-16 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[#063b2d]">
                        <Package size={24} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#063b2d]">
                        No products yet
                    </h3>

                    <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-400">
                        You haven't published any products yet.
                    </p>
                </div>
            ) : (
                /* Product Grid */
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <UserProductCard
                            key={product._id}
                            product={product}
                            onDelete={onDelete}
                            deleting={deletingId === product._id}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}