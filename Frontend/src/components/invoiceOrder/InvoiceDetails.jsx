import React from "react";
import {
    FileText,
    MapPin,
    User,
    Package,
    IndianRupee,
    CalendarDays,
} from "lucide-react";

export default function InvoiceDetails({ order }) {
    if (!order) {
        return (
            <div className="flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-green-200 bg-white">
                <div className="text-center">
                    <FileText
                        size={38}
                        className="mx-auto text-green-200"
                    />

                    <h3 className="mt-3 text-sm font-bold text-[#063b2d]">
                        Select an order
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                        Select an order above to view its invoice.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-green-100 bg-white shadow-sm">

            {/* Invoice Header */}
            <div className="border-b border-green-50 p-6 sm:p-7">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#063b2d]">
                                <FileText size={19} />
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                    Invoice
                                </p>

                                <h2 className="text-lg font-bold text-[#063b2d]">
                                    {order.invoiceId}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="sm:text-right">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Order ID
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#063b2d]">
                            {order.id}
                        </p>
                    </div>
                </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 gap-4 border-b border-green-50 p-6 sm:grid-cols-2">
                <Info
                    icon={CalendarDays}
                    label="Order Date"
                    value={order.orderDate}
                />

                <Info
                    icon={CalendarDays}
                    label="Invoice Date"
                    value={order.invoiceDate}
                />
            </div>

            {/* Buyer / Seller */}
            <div className="grid grid-cols-1 gap-6 border-b border-green-50 p-6 sm:grid-cols-2">

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Seller
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-[#063b2d]">
                            <User size={17} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-slate-700">
                                {order.seller}
                            </p>

                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                <MapPin size={12} />
                                {order.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Buyer
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-[#063b2d]">
                            <User size={17} />
                        </div>

                        <p className="text-sm font-semibold text-slate-700">
                            {order.buyer}
                        </p>
                    </div>
                </div>

            </div>

            {/* Product */}
            <div className="p-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Order Details
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-green-50">
                    <div className="flex items-center gap-4 bg-[#f6faf5] p-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#063b2d]">
                            <Package size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-[#063b2d]">
                                {order.product}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                {order.category} · {order.condition}
                            </p>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 border-t border-green-50 sm:grid-cols-4">

                        <InvoiceItem
                            label="Product ID"
                            value={order.productId}
                        />

                        <InvoiceItem
                            label="Quantity"
                            value={order.quantity}
                        />

                        <InvoiceItem
                            label="Unit Price"
                            value={`₹${Number(order.price).toLocaleString("en-IN")}`}
                        />

                        <InvoiceItem
                            label="Total"
                            value={`₹${Number(order.total).toLocaleString("en-IN")}`}
                        />

                    </div>
                </div>

                {/* Total */}
                <div className="mt-5 flex items-center justify-between border-t border-green-50 pt-5">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Invoice Total
                        </p>

                        <p className="mt-1 text-2xl font-bold text-[#063b2d]">
                            ₹{Number(order.total).toLocaleString("en-IN")}
                        </p>
                    </div>

                    <IndianRupee
                        size={28}
                        className="text-green-200"
                    />
                </div>

            </div>
        </div>
    );
}

function Info({ icon: Icon, label, value }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-[#063b2d]">
                <Icon size={16} />
            </div>

            <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    {label}
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-700">
                    {value}
                </p>
            </div>
        </div>
    );
}

function InvoiceItem({ label, value }) {
    return (
        <div className="border-r border-green-50 p-4 last:border-r-0">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                {label}
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-700">
                {value}
            </p>
        </div>
    );
}