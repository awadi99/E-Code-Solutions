import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
    products,
    sellers,
    onAddToCart,
}) {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                    seller={sellers[product.createdBy]}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}