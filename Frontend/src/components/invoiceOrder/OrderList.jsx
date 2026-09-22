import React from "react";
import {
    Eye,
    FileText,
} from "lucide-react";

export default function OrderList({
    orders = [],
    selectedOrder,
    onSelect,
}) {
    return (
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
            <div className="border-b border-green-50 px-5 py-4">
                <h2 className="text-sm font-bold text-[#063b2d]">
                    Orders
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                    Orders and their corresponding invoices.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[850px]">
                    <thead>
                        <tr className="border-b border-green-50 bg-[#f6faf5]">
                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Order
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Product
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Seller
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Amount
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Payment
                            </th>

                            <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Status
                            </th>

                            <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => {
                            const isSelected =
                                selectedOrder?.id === order.id;

                            return (
                                <tr
                                    key={order.id}
                                    className={`border-b border-green-50 transition-colors ${
                                        isSelected
                                            ? "bg-green-50/60"
                                            : "hover:bg-[#f6faf5]"
                                    }`}
                                >
                                    <td className="px-5 py-4">
                                        <p className="text-xs font-bold text-[#063b2d]">
                                            {order.id}
                                        </p>

                                        <p className="mt-1 text-[10px] text-slate-400">
                                            {order.orderDate}
                                        </p>
                                    </td>

                                    <td className="px-5 py-4">
                                        <p className="text-xs font-semibold text-slate-700">
                                            {order.product}
                                        </p>

                                        <p className="mt-1 text-[10px] text-slate-400">
                                            {order.condition}
                                        </p>
                                    </td>

                                    <td className="px-5 py-4 text-xs text-slate-600">
                                        {order.seller}
                                    </td>

                                    <td className="px-5 py-4">
                                        <p className="text-xs font-bold text-[#063b2d]">
                                            ₹{Number(order.total).toLocaleString("en-IN")}
                                        </p>
                                    </td>

                                    <td className="px-5 py-4">
                                        <Status
                                            value={order.paymentStatus}
                                        />
                                    </td>

                                    <td className="px-5 py-4">
                                        <Status value={order.status} />
                                    </td>

                                    <td className="px-5 py-4 text-right">
                                        <button
                                            type="button"
                                            onClick={() => onSelect(order)}
                                            className="inline-flex items-center gap-2 rounded-lg border border-green-100 px-3 py-2 text-xs font-semibold text-[#063b2d] transition-colors hover:border-green-200 hover:bg-green-50"
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
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Status({ value }) {
    const isPaid =
        value === "Paid" ||
        value === "Completed";

    return (
        <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
                isPaid
                    ? "bg-green-50 text-green-700"
                    : "bg-amber-50 text-amber-700"
            }`}
        >
            {value}
        </span>
    );
}