import React from "react";
import {
    Package,
    CalendarDays,
    UserRound,
    IndianRupee,
    CheckCircle2,
    Truck,
    Eye,
} from "lucide-react";

const statusConfig = {
    Completed: {
        icon: CheckCircle2,
        className: "border-green-100 bg-green-50 text-green-700",
    },

    Processing: {
        icon: Truck,
        className: "border-amber-100 bg-amber-50 text-amber-700",
    },
};

export default function SalesCard({ order, onView }) {
    const {
        id,
        product,
        condition,
        buyer,
        amount,
        status,
        date,
    } = order;

    const currentStatus =
        statusConfig[status] || statusConfig.Processing;

    const StatusIcon = currentStatus.icon;

    return (
        <article
            className="
                border-b border-green-50
                p-5
                transition-colors duration-200
                last:border-b-0
                hover:bg-[#f6faf5]
                sm:p-6
            "
        >
            <div
                className="
                    flex flex-col gap-5
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >
                {/* PRODUCT */}
                <div className="flex min-w-0 items-start gap-4">
                    <div
                        className="
                            flex h-12 w-12 shrink-0
                            items-center justify-center
                            rounded-xl
                            border border-green-100
                            bg-green-50
                            text-[#063b2d]
                        "
                    >
                        <Package size={21} />
                    </div>

                    <div className="min-w-0">
                        <h3
                            className="
                                truncate
                                text-sm font-bold
                                text-[#063b2d]
                                sm:text-[15px]
                            "
                        >
                            {product}
                        </h3>

                        <p
                            className="
                                mt-1
                                text-[10px] font-medium
                                text-slate-400
                            "
                        >
                            Order #{id}
                        </p>

                        {condition && (
                            <p className="mt-1 text-[11px] text-slate-500">
                                Condition:{" "}
                                <span className="font-semibold text-slate-700">
                                    {condition}
                                </span>
                            </p>
                        )}
                    </div>
                </div>

                {/* ORDER DETAILS */}
                <div
                    className="
                        grid grid-cols-2 gap-4
                        sm:grid-cols-4
                        lg:flex lg:items-center
                        lg:gap-8
                    "
                >
                    {/* BUYER */}
                    <div>
                        <div className="flex items-center gap-1.5">
                            <UserRound
                                size={13}
                                className="text-slate-400"
                            />

                            <p
                                className="
                                    text-[9px] font-bold
                                    uppercase tracking-widest
                                    text-slate-400
                                "
                            >
                                Buyer
                            </p>
                        </div>

                        <p
                            className="
                                mt-1 max-w-[150px]
                                truncate text-xs
                                font-semibold text-slate-700
                            "
                        >
                            {buyer}
                        </p>
                    </div>

                    {/* AMOUNT */}
                    <div>
                        <div className="flex items-center gap-1.5">
                            <IndianRupee
                                size={13}
                                className="text-slate-400"
                            />

                            <p
                                className="
                                    text-[9px] font-bold
                                    uppercase tracking-widest
                                    text-slate-400
                                "
                            >
                                Amount
                            </p>
                        </div>

                        <p
                            className="
                                mt-1 text-sm
                                font-bold text-[#063b2d]
                            "
                        >
                            ₹{Number(amount).toLocaleString("en-IN")}
                        </p>
                    </div>

                    {/* DATE */}
                    <div>
                        <div className="flex items-center gap-1.5">
                            <CalendarDays
                                size={13}
                                className="text-slate-400"
                            />

                            <p
                                className="
                                    text-[9px] font-bold
                                    uppercase tracking-widest
                                    text-slate-400
                                "
                            >
                                Date
                            </p>
                        </div>

                        <p
                            className="
                                mt-1 text-xs
                                font-medium text-slate-600
                            "
                        >
                            {date}
                        </p>
                    </div>

                    {/* STATUS */}
                    <div>
                        <p
                            className="
                                mb-1 text-[9px] font-bold
                                uppercase tracking-widest
                                text-slate-400
                            "
                        >
                            Status
                        </p>

                        <div
                            className={`
                                inline-flex items-center gap-1.5
                                rounded-full border
                                px-3 py-1.5
                                text-[9px] font-bold
                                uppercase tracking-wider
                                ${currentStatus.className}
                            `}
                        >
                            <StatusIcon size={12} />
                            {status}
                        </div>
                    </div>
                </div>

                {/* VIEW */}
                <button
                    type="button"
                    onClick={() => onView?.(order)}
                    className="
                        inline-flex shrink-0
                        items-center justify-center gap-2
                        rounded-lg
                        border border-green-100
                        px-4 py-2.5
                        text-[10px] font-bold
                        uppercase tracking-wider
                        text-[#063b2d]
                        transition-colors duration-200
                        hover:border-green-200
                        hover:bg-green-50
                    "
                >
                    <Eye size={14} />
                    View
                </button>
            </div>
        </article>
    );
}