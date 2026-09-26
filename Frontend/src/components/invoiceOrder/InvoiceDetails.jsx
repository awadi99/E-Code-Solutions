import React from "react";
import {
    FileText,
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

    const product = order.product;
    const buyer = order.buyer;
    const seller = order.seller;

    const total =
        Number(product?.expectedPrice || 0) *
        Number(product?.quantity || 0);

    const invoiceId = product?._id
        ? `INV-${String(product._id).slice(-6).toUpperCase()}`
        : "INV-000000";

    const orderDate = product?.createdAt
        ? new Date(product.createdAt).toLocaleDateString("en-IN")
        : "—";

    return (
        <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">

            {/* Invoice Header */}
            <div className="border-b border-green-50 p-6 sm:p-7">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#063b2d]">
                            <FileText size={19} />
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                Invoice
                            </p>

                            <h2 className="text-lg font-bold text-[#063b2d]">
                                {invoiceId}
                            </h2>
                        </div>
                    </div>

                    <div className="sm:text-right">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Product Name
                        </p>

                        <p className="mt-1 max-w-[220px] truncate text-xs font-bold text-[#063b2d]">
                            {product?.productName || "—"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Date */}
            <div className="border-b border-green-50 p-6">
                <Info
                    icon={CalendarDays}
                    label="Order Date"
                    value={orderDate}
                />
            </div>

            {/* Buyer & Seller */}
            <div className="grid grid-cols-1 gap-6 border-b border-green-50 p-6 sm:grid-cols-2">

                {/* Buyer */}
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        Buyer
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-[#063b2d]">
                            <User size={17} />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-slate-700">
                                {buyer?.fullName || "Unknown buyer"}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                {buyer?.role || "Buyer"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Seller */}
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
                                {seller?.fullName || "Unknown seller"}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                Seller
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product */}
            <div className="p-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Order Details
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-green-50">

                    {/* Product heading */}
                    <div className="flex items-center gap-4 bg-[#f6faf5] p-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#063b2d]">
                            <Package size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-bold text-[#063b2d]">
                                {product?.productName || "—"}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                {product?.brand || "—"} ·{" "}
                                {product?.model || "—"}
                            </p>
                        </div>

                        <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-[9px] font-bold uppercase text-green-700">
                            {product?.condition || "—"}
                        </span>
                    </div>

                    {/* Product information */}
                    <div className="grid grid-cols-2 border-t border-green-50 sm:grid-cols-4">

                        <InvoiceItem
                            label="Category"
                            value={product?.category || "—"}
                        />

                        <InvoiceItem
                            label="Quantity"
                            value={product?.quantity || 0}
                        />

                        <InvoiceItem
                            label="Unit Price"
                            value={`₹${Number(
                                product?.expectedPrice || 0
                            ).toLocaleString("en-IN")}`}
                        />

                        <InvoiceItem
                            label="Total"
                            value={`₹${total.toLocaleString("en-IN")}`}
                        />

                    </div>
                </div>

                {/* Description */}
                <div className="mt-5 rounded-xl border border-green-50 bg-[#f6faf5] p-4">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Product Description
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {product?.description || "No description provided."}
                    </p>
                </div>

                {/* Total */}
                <div className="mt-5 flex items-center justify-between border-t border-green-50 pt-5">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Invoice Total
                        </p>

                        <p className="mt-1 text-2xl font-bold text-[#063b2d]">
                            ₹{total.toLocaleString("en-IN")}
                        </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                        <IndianRupee
                            size={22}
                            className="text-[#063b2d]"
                        />
                    </div>
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

            <p className="mt-1 truncate text-xs font-semibold text-slate-700">
                {value}
            </p>
        </div>
    );
}