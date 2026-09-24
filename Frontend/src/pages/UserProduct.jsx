import React from "react";
import { Package } from "lucide-react";
import { toast } from "react-toastify";
import { useAddProject } from "../hook/useAddProject";
import UserProductHeader from "../components/userProduct/UserProductHeader";
import UserProductSummary from "../components/userProduct/UserProductSummary";
import UserProductList from "../components/userProduct/UserProductList";

export default function UserProduct() {
    const {
        products,
        productCount,
        isProductsLoading,
        productsError,
        deleteProduct,
    } = useAddProject();

    if (isProductsLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6faf5]">
                <div className="h-9 w-9 animate-spin rounded-full border-2 border-green-100 border-t-[#063b2d]" />
            </div>
        );
    }

    if (productsError) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6faf5] px-5">
                <div className="w-full max-w-md rounded-3xl border border-red-100 bg-white p-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                        <Package size={22} />
                    </div>

                    <h2 className="mt-5 text-lg font-bold text-slate-800">
                        Unable to load products
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                        Something went wrong while loading your products.
                    </p>

                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="mt-6 rounded-xl bg-[#063b2d] px-5 py-2.5 text-xs font-bold text-white"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    const totalQuantity = products.reduce(
        (total, product) =>
            total + Number(product.quantity || 0),
        0
    );

    const totalValue = products.reduce(
        (total, product) =>
            total +
            Number(product.expectedPrice || 0) *
                Number(product.quantity || 0),
        0
    );

    // DELETE PRODUCT
    const handleDelete = async (product) => {
        try {
            await deleteProduct.mutateAsync(product._id);
    
            toast.success("Product deleted successfully!");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to delete product."
            );
    
            console.error(
                "Delete Product Error:",
                error.response?.data?.message || error.message
            );
        }
    };
    return (
        <div className="min-h-screen w-full bg-[#f6faf5]">
            <UserProductHeader />

            <UserProductSummary
                productCount={productCount}
                totalQuantity={totalQuantity}
                totalValue={totalValue}
            />

            <UserProductList
                products={products}
                onDelete={handleDelete}
                deletingId={
                    deleteProduct.isPending
                        ? deleteProduct.variables
                        : null
                }
            />
        </div>
    );
}