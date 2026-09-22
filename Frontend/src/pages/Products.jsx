import React, { useMemo, useState } from "react";
import ProductSearch from "../components/products/ProductSearch";
import ProductFilters from "../components/products/ProductFilters";
import ProductCard from "../components/products/ProductCard";
import temporaryProducts from "../components/products/temporaryProducts";

export default function Products() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [condition, setCondition] = useState("All");

    const filteredProducts = useMemo(() => {
        const query = search.trim().toLowerCase();

        return temporaryProducts.filter((product) => {
            if (!product) return false;

            const matchesSearch =
                !query ||
                [
                    product.productName,
                    product.category,
                    product.brand,
                    product.model,
                    product.condition,
                    product.seller,
                    product.location,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase()
                    .includes(query);

            const matchesCategory =
                category === "All" ||
                product.category === category;

            const matchesCondition =
                condition === "All" ||
                product.condition === condition;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesCondition
            );
        });
    }, [search, category, condition]);

    const handleBuy = (product) => {
        console.log("Buy:", product);
    };

    const resetFilters = () => {
        setSearch("");
        setCategory("All");
        setCondition("All");
    };

    return (
        <div className="min-h-screen bg-[#f6faf5] p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-7xl">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-[#063b2d]">
                        Products
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Browse available electronic products.
                    </p>
                </div>

                <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <ProductSearch
                        value={search}
                        onChange={setSearch}
                    />

                    <ProductFilters
                        category={category}
                        condition={condition}
                        onCategoryChange={setCategory}
                        onConditionChange={setCondition}
                        onReset={resetFilters}
                    />
                </div>

                {/* PRODUCT CARDS */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onBuy={handleBuy}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}