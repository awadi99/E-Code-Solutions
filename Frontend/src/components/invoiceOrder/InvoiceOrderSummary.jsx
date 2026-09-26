import React from "react";
import {
    ShoppingBag,
    FileText,
    IndianRupee,
    Package,
} from "lucide-react";

export default function InvoiceOrderSummary({ orders = [] }) {
    const totalOrders = orders.length;

    const totalAmount = orders.reduce(
        (sum, order) =>
            sum +
            Number(order.product?.expectedPrice || 0) *
                Number(order.product?.quantity || 0),
        0
    );

    const totalQuantity = orders.reduce(
        (sum, order) =>
            sum + Number(order.product?.quantity || 0),
        0
    );

    const invoices = orders.length;

    const summary = [
        {
            label: "Total Orders",
            value: totalOrders,
            icon: ShoppingBag,
        },
        {
            label: "Total Invoices",
            value: invoices,
            icon: FileText,
        },
        {
            label: "Total Amount",
            value: `₹${totalAmount.toLocaleString("en-IN")}`,
            icon: IndianRupee,
        },
        {
            label: "Total Items",
            value: totalQuantity,
            icon: Package,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summary.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.label}
                        className="
                            rounded-2xl
                            border border-green-100
                            bg-white
                            p-5
                            shadow-sm
                            transition-shadow
                            duration-200
                            hover:shadow-md
                        "
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-slate-400
                                ">
                                    {item.label}
                                </p>

                                <p className="
                                    mt-2
                                    text-xl
                                    font-bold
                                    text-[#063b2d]
                                ">
                                    {item.value}
                                </p>
                            </div>

                            <div className="
                                flex h-10 w-10
                                shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-green-50
                                text-[#063b2d]
                            ">
                                <Icon
                                    size={19}
                                    strokeWidth={1.8}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}