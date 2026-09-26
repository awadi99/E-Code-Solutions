import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";

import ProductSearch from "../components/products/ProductSearch";
import ProductCard from "../components/products/ProductCard";

import { useProduct } from "../hook/useOrder.js";

export default function Products() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [condition, setCondition] = useState("All");

    const {
        products,
        isProductsLoading,
        productsError,
        buyProduct,
    } = useProduct();

    const filteredProducts = useMemo(() => {
        const query = search.trim().toLowerCase();

        return products.filter((product) => {
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
    }, [products, search, category, condition]);

    const handleBuy = async (product) => {
        try {
            const data = await buyProduct(product._id);
    
            if (!data) {
                return;
            }
    
            console.log("Buy Product Response:", data);
            toast.success("Product Buy successfully");
    
        } catch (error) {
            console.error(
                "Buy Product Error:",
                error.response?.data?.message || error.message
            );

        toast.error(
            error.response?.data?.message || "Failed to buy product"
        );

        }
    };

    const resetFilters = () => {
        setSearch("");
        setCategory("All");
        setCondition("All");
    };

    if (isProductsLoading) {
        return (
        <div className="flex min-h-screen items-center justify-center bg-[#f6faf5]">
        <div className="flex flex-col items-center gap-3">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-green-100 border-t-[#063b2d]" />
            <p className="text-sm font-medium text-slate-500">
                Loading product...
            </p>
        </div>
    </div>
        )
    }

    if (productsError) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6faf5]">
            <div className="flex flex-col items-center gap-3">
                <div className="h-9 w-9 animate-spin rounded-full border-2 border-green-100 border-t-[#063b2d]" />

                <p className="text-sm font-medium text-slate-500">
                Unable to load products.
                </p>
            </div>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f6faf5] p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-[#063b2d]">
                        Products
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Browse available electronic products.
                    </p>
                </div>

                {/* Search + Filters */}
                <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <ProductSearch
                        value={search}
                        onChange={setSearch}
                    />
                </div>

                {/* Products */}
                {filteredProducts.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-green-200 bg-white px-6 py-16 text-center">
                        <h3 className="text-base font-bold text-[#063b2d]">
                            No products found
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Try changing your search or filters.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                onBuy={handleBuy}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}