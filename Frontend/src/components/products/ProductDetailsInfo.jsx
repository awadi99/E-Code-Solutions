import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    Package,
    IndianRupee,
    ShoppingCart,
    Tag,
    Hash,
    Layers3,
    CalendarDays,
} from "lucide-react";
import { toast } from "react-toastify";

import { useProduct } from "../../hook/useOrder";

export default function ProductDetailsInfo() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const {
        products,
        isProductsLoading,
        productsError,
        buyProduct
    } = useProduct();

    const product = products.find(
        (item) => String(item?._id) === String(productId)
    );

    // Loading
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
        );
    }

    // Error
    if (productsError) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6faf5] px-5">
                <div className="w-full max-w-md rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                        <Package size={22} />
                    </div>

                    <h2 className="mt-5 text-lg font-bold text-slate-800">
                        Unable to load product
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        Something went wrong while loading this product.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/main/products")}
                        className="mt-6 rounded-xl bg-[#063b2d] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-green-800"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    // Product not found
    if (!product) {
        return (
            <div className="min-h-screen bg-[#f6faf5] p-6">
                <button
                    type="button"
                    onClick={() => navigate("/main/products")}
                    className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#063b2d] hover:bg-green-50"
                >
                    <ArrowLeft size={17} />
                    Back to Products
                </button>

                <div className="mx-auto mt-20 max-w-md rounded-2xl border border-green-100 bg-white p-10 text-center shadow-sm">
                    <Package
                        size={50}
                        className="mx-auto text-green-200"
                    />

                    <h2 className="mt-4 text-lg font-bold text-[#063b2d]">
                        Product not found
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        This product could not be found.
                    </p>
                </div>
            </div>
        );
    }

    const handleBuy =  async (product) => {
        try {
            const data = await buyProduct(productId);
            if(!data){
                return;
            }

            toast.success("Product Buy successfully");
            setTimeout(()=>{
            navigate("/main/invoice-order",{
                state:{
                    order: data,
                }
            });
            },4000);
            return data;
        } catch (error) {
            console.error(
                "Buy Product Error:",
                error.response?.data?.message || error.message
            );

        toast.error(
            error.response?.data?.message || "Failed to buy product"
        ,);
        }
    };

    return (
        <div className="min-h-screen bg-[#f6faf5]">
            {/* Header */}
            <header className="border-b border-green-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => navigate("/main/products")}
                        className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#063b2d] transition-colors hover:bg-green-50"
                    >
                        <ArrowLeft size={17} />
                        Back to Products
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {/* IMAGE */}
                    <section className="flex min-h-[450px] items-center justify-center overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
                        {product.productImage?.url ? (
                            <img
                                src={product.productImage.url}
                                alt={product.productName}
                                className="max-h-[500px] w-full object-contain p-8"
                            />
                        ) : (
                            <Package
                                size={100}
                                strokeWidth={1}
                                className="text-green-200"
                            />
                        )}
                    </section>

                    {/* DETAILS */}
                    <section className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">

                        {/* Category */}
                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            {product.category}
                        </p>

                        {/* Title */}
                        <div className="mt-2 flex items-start justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-[#063b2d] sm:text-3xl">
                                    {product.productName}
                                </h1>

                                <p className="mt-2 text-sm text-slate-400">
                                    {product.brand} · {product.model}
                                </p>
                            </div>

                            <span className="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase text-[#063b2d]">
                                {product.condition}
                            </span>
                        </div>

                        {/* PRICE */}
                        <div className="my-7 border-y border-green-50 py-6">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                Expected Price
                            </p>

                            <div className="mt-1 flex items-center">
                                <IndianRupee
                                    size={22}
                                    className="text-[#063b2d]"
                                />

                                <span className="text-3xl font-bold text-[#063b2d]">
                                    {Number(
                                        product.expectedPrice || 0
                                    ).toLocaleString("en-IN")}
                                </span>
                            </div>
                        </div>

                        {/* PRODUCT INFORMATION */}
                        <section className="border-t border-green-50 pt-6">
                            <h2 className="text-sm font-bold uppercase tracking-tight text-[#063b2d]">
                                Product Information
                            </h2>

                            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <InfoItem
                                    icon={Tag}
                                    label="Category"
                                    value={product.category}
                                />

                                <InfoItem
                                    icon={Package}
                                    label="Condition"
                                    value={product.condition}
                                />

                                <InfoItem
                                    icon={Hash}
                                    label="Brand"
                                    value={product.brand}
                                />

                                <InfoItem
                                    icon={Layers3}
                                    label="Model"
                                    value={product.model}
                                />

                                <InfoItem
                                    icon={Package}
                                    label="Quantity"
                                    value={product.quantity}
                                />

                            </div>

                            {/* DESCRIPTION */}
                            <div className="mt-4 rounded-xl border border-green-50 bg-[#f6faf5] p-4">
                                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                    Description
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {product.description ||
                                        "No description provided."}
                                </p>
                            </div>
                        </section>

                        {/* BUY */}
                        <button
                            type="button"
                            onClick={handleBuy}
                            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#063b2d] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-800"
                        >
                            <ShoppingCart size={18} />
                            Buy Product
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
}

function InfoItem({ icon: Icon, label, value }) {
    return (
        <div className="rounded-xl border border-green-50 bg-[#f6faf5] p-3">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#063b2d]">
                    <Icon size={15} strokeWidth={2} />
                </div>

                <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        {label}
                    </p>

                    <p className="mt-0.5 truncate text-xs font-semibold text-slate-700">
                        {value || "Not provided"}
                    </p>
                </div>
            </div>
        </div>
    );
}