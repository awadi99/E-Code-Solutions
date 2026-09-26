import React from "react";
import {
    Eye,
    FileText,
    Package,
} from "lucide-react";

export default function OrderList({
    orders = [],
    selectedOrder,
    onSelect,
}) {
    return (
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">

            {/* Header */}
            <div className="border-b border-green-50 px-5 py-4">
                <h2 className="text-sm font-bold text-[#063b2d]">
                    Orders
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                    Products selected for purchase.
                </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">

                    <thead>
                        <tr className="border-b border-green-50 bg-[#f6faf5]">

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Product
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Category
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Condition
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Quantity
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Amount
                            </th>

                            <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-5 py-12 text-center"
                                >
                                    <Package
                                        size={30}
                                        className="mx-auto text-green-200"
                                    />

                                    <p className="mt-3 text-sm font-semibold text-[#063b2d]">
                                        No orders found
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        Your selected products will appear here.
                                    </p>
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => {
                                const product = order?.product;

                                const isSelected =
                                    selectedOrder?.product?._id ===
                                    product?._id;

                                const total =
                                    Number(product?.expectedPrice || 0) *
                                    Number(product?.quantity || 0);

                                const orderDate = product?.createdAt
                                    ? new Date(
                                          product.createdAt
                                      ).toLocaleDateString("en-IN")
                                    : "—";

                                return (
                                    <tr
                                        key={product?._id}
                                        className={`
                                            border-b
                                            border-green-50
                                            transition-colors
                                            ${
                                                isSelected
                                                    ? "bg-green-50/60"
                                                    : "hover:bg-[#f6faf5]"
                                            }
                                        `}
                                    >

                                        {/* Product */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                <div className="
                                                    flex h-10 w-10
                                                    shrink-0
                                                    items-center justify-center
                                                    rounded-lg
                                                    bg-green-50
                                                    text-[#063b2d]
                                                ">
                                                    <Package size={17} />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="
                                                        max-w-[220px]
                                                        truncate
                                                        text-xs
                                                        font-bold
                                                        text-[#063b2d]
                                                    ">
                                                        {product?.productName ||
                                                            "—"}
                                                    </p>

                                                    <p className="
                                                        mt-1
                                                        text-[10px]
                                                        text-slate-400
                                                    ">
                                                        {product?.brand || "—"}{" "}
                                                        ·{" "}
                                                        {product?.model || "—"}
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className="px-5 py-4">
                                            <span className="
                                                rounded-full
                                                bg-green-50
                                                px-2.5 py-1
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                text-green-700
                                            ">
                                                {product?.category || "—"}
                                            </span>
                                        </td>

                                        {/* Condition */}
                                        <td className="px-5 py-4">
                                            <span className="
                                                text-xs
                                                font-semibold
                                                text-slate-600
                                            ">
                                                {product?.condition || "—"}
                                            </span>
                                        </td>

                                        {/* Quantity */}
                                        <td className="px-5 py-4">
                                            <span className="
                                                text-xs
                                                font-semibold
                                                text-slate-700
                                            ">
                                                {product?.quantity || 0}
                                            </span>
                                        </td>

                                        {/* Amount */}
                                        <td className="px-5 py-4">
                                            <p className="
                                                text-xs
                                                font-bold
                                                text-[#063b2d]
                                            ">
                                                ₹
                                                {total.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </p>

                                            <p className="
                                                mt-1
                                                text-[10px]
                                                text-slate-400
                                            ">
                                                {orderDate}
                                            </p>
                                        </td>

                                        {/* Action */}
                                        <td className="px-5 py-4 text-right">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onSelect?.(order)
                                                }
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    rounded-lg
                                                    border
                                                    border-green-100
                                                    px-3 py-2
                                                    text-xs
                                                    font-semibold
                                                    text-[#063b2d]
                                                    transition-colors
                                                    hover:border-green-200
                                                    hover:bg-green-50
                                                "
                                            >
                                                {isSelected ? (
                                                    <FileText size={14} />
                                                ) : (
                                                    <Eye size={14} />
                                                )}

                                                {isSelected
                                                    ? "Selected"
                                                    : "View"}
                                            </button>
                                        </td>

                                    </tr>
                                );
                            })
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
}