import React, { useState } from "react";
import InvoiceOrderSummary from "../components/invoiceOrder/InvoiceOrderSummary";
import OrderList from "../components/invoiceOrder/OrderList";
import InvoiceDetails from "../components/invoiceOrder/InvoiceDetails";
import invoiceOrderData from "../components/invoiceOrder/invoiceOrderData";

export default function InvoiceOrder() {
    const [selectedOrder, setSelectedOrder] = useState(
        invoiceOrderData[0] || null
    );

    return (
        <div className="min-h-screen bg-[#f6faf5] p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-7">
                    <h1 className="text-2xl font-bold text-[#063b2d]">
                        Invoice & Order
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Manage orders and view their corresponding invoices.
                    </p>
                </div>

                {/* Summary */}
                <InvoiceOrderSummary
                    orders={invoiceOrderData}
                />

                {/* Orders */}
                <div className="mt-6">
                    <OrderList
                        orders={invoiceOrderData}
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