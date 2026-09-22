import React from "react";
import {
    Eye,
    Package,
    CheckCircle2,
    Truck,
    Clock3,
} from "lucide-react";

const statusConfig = {
    Completed: {
        icon: CheckCircle2,
        className: "bg-green-50 text-green-700 border-green-100",
    },
    Processing: {
        icon: Truck,
        className: "bg-amber-50 text-amber-700 border-amber-100",
    },
    Pending: {
        icon: Clock3,
        className: "bg-slate-50 text-slate-600 border-slate-200",
    },
};

export default function SalesList({ orders = [], onView }) {
    if (orders.length === 0) {
        return (
            <div
                className="
                    flex flex-col items-center justify-center
                    rounded-2xl
                    border border-green-100
                    bg-white
                    px-5 py-16
                    text-center
                    shadow-sm
                "
            >
                <div
                    className="
                        flex h-12 w-12
                        items-center justify-center
                        rounded-xl
                        border border-green-100
                        bg-green-50
                        text-[#063b2d]
                    "
                >
                    <Package size={22} />
                </div>

                <h3
                    className="
                        mt-4
                        text-sm
                        font-bold
                        text-[#063b2d]
                    "
                >
                    No sales or orders found
                </h3>

                <p
                    className="
                        mt-1
                        max-w-sm
                        text-xs
                        text-slate-400
                    "
                >
                    Your sales and orders will appear here.
                </p>
            </div>
        );
    }

    return (
        <div
            className="
                w-full
                overflow-hidden
                rounded-2xl
                border border-green-100
                bg-white
                shadow-sm
            "
        >
            {/* Mobile horizontal scroll */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[950px] border-collapse">
                    <thead>
                        <tr className="border-b border-green-100 bg-[#f6faf5]">
                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Order
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Product
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Condition
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Buyer
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Amount
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Date
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-left
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Status
                            </th>

                            <th
                                className="
                                    px-5 py-4
                                    text-right
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-slate-400
                                "
                            >
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => {
                            const status =
                                statusConfig[order.status] ||
                                statusConfig.Pending;

                            const StatusIcon = status.icon;

                            return (
                                <tr
                                    key={order.id}
                                    className="
                                        border-b
                                        border-green-50
                                        transition-colors
                                        duration-150
                                        last:border-b-0
                                        hover:bg-[#f6faf5]
                                    "
                                >
                                    {/* Order */}
                                    <td className="px-5 py-5">
                                        <span
                                            className="
                                                text-xs
                                                font-bold
                                                text-[#063b2d]
                                            "
                                        >
                                            #{order.id.replace("ORD-", "")}
                                        </span>
                                    </td>

                                    {/* Product */}
                                    <td className="px-5 py-5">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="
                                                    flex h-9 w-9 shrink-0
                                                    items-center justify-center
                                                    rounded-lg
                                                    border border-green-100
                                                    bg-green-50
                                                    text-[#063b2d]
                                                "
                                            >
                                                <Package size={17} />
                                            </div>

                                            <span
                                                className="
                                                    whitespace-nowrap
                                                    text-sm
                                                    font-semibold
                                                    text-slate-800
                                                "
                                            >
                                                {order.product}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Condition */}
                                    <td className="px-5 py-5">
                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-xs
                                                font-medium
                                                text-slate-600
                                            "
                                        >
                                            {order.condition}
                                        </span>
                                    </td>

                                    {/* Buyer */}
                                    <td className="px-5 py-5">
                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-xs
                                                font-semibold
                                                text-slate-700
                                            "
                                        >
                                            {order.buyer}
                                        </span>
                                    </td>

                                    {/* Amount */}
                                    <td className="px-5 py-5">
                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-sm
                                                font-bold
                                                text-[#063b2d]
                                            "
                                        >
                                            ₹{Number(order.amount).toLocaleString("en-IN")}
                                        </span>
                                    </td>

                                    {/* Date */}
                                    <td className="px-5 py-5">
                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-xs
                                                font-medium
                                                text-slate-500
                                            "
                                        >
                                            {order.date}
                                        </span>
                                    </td>

                                    {/* Status */}
                                    <td className="px-5 py-5">
                                        <span
                                            className={`
                                                inline-flex
                                                items-center
                                                gap-1.5
                                                whitespace-nowrap
                                                rounded-full
                                                border
                                                px-2.5
                                                py-1.5
                                                text-[9px]
                                                font-bold
                                                uppercase
                                                tracking-wide
                                                ${status.className}
                                            `}
                                        >
                                            <StatusIcon size={12} />
                                            {order.status}
                                        </span>
                                    </td>

                                    {/* Action */}
                                    <td className="px-5 py-5 text-right">
                                        <button
                                            type="button"
                                            onClick={() => onView?.(order)}
                                            className="
                                                inline-flex
                                                items-center
                                                gap-1.5
                                                rounded-lg
                                                border
                                                border-green-100
                                                bg-white
                                                px-3
                                                py-2
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-wide
                                                text-[#063b2d]
                                                transition-all
                                                duration-150
                                                hover:border-green-200
                                                hover:bg-green-50
                                            "
                                        >
                                            <Eye size={13} />
                                            View
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