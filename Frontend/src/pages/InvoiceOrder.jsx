import React, { useState } from "react";
import InvoiceOrderSummary from "../components/invoiceOrder/InvoiceOrderSummary";
import OrderList from "../components/invoiceOrder/OrderList";
import InvoiceDetails from "../components/invoiceOrder/InvoiceDetails.jsx";
import { useLocation } from "react-router-dom";

export default function InvoiceOrder() {
    const location = useLocation();

    const order = location.state?.order;

    const [selectedOrder, setSelectedOrder] = useState(order || null);

    console.log("Invoice Order:", order);
    console.log("Buyer:", order?.buyer);
    console.log("Seller:", order?.seller);

    if (!order) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f6faf5]">
                <p className="text-sm font-medium text-slate-500">
                    No order selected.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f6faf5] p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-7">
                    <h1 className="text-2xl font-bold text-[#063b2d]">
                        Invoice & Order
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Manage your order and view its invoice.
                    </p>
                </div>

                {/* Summary */}
                <InvoiceOrderSummary
                    orders={[order]}
                />

                {/* Orders */}
                <div className="mt-6">
                    <OrderList
                        orders={[order]}
                        selectedOrder={selectedOrder}
                        onSelect={setSelectedOrder}
                    />
                </div>

                {/* Invoice */}
                <div className="mt-6">
                    <InvoiceDetails
                        order={selectedOrder}
                    />
                </div>

            </div>
        </div>
    );
}