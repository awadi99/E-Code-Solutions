import React from "react";
import {
    IndianRupee,
    ShoppingBag,
    Package,
} from "lucide-react";

const SummaryCard = ({ icon: Icon, title, value }) => {
    return (
        <div
            className="
                rounded-2xl
                border border-green-100
                bg-white
                p-5
                shadow-sm
                transition-all duration-200
                hover:border-green-200
                hover:shadow-md
            "
        >
            <div
                className="
                    mb-4
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    border border-green-100
                    bg-green-50
                    text-[#063b2d]
                "
            >
                <Icon size={21} strokeWidth={2} />
            </div>

            <p
                className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-slate-400
                "
            >
                {title}
            </p>

            <p
                className="
                    mt-1
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[#063b2d]
                "
            >
                {value}
            </p>
        </div>
    );
};

export default function SalesSummary({
    totalSales = 0,
    totalOrders = 0,
    totalPublishedProducts = 0,
}) {
    return (
        <section
            className="
                grid
                w-full
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
            "
        >
            <SummaryCard
                icon={IndianRupee}
                title="Total Sales"
                value={`₹${Number(totalSales).toLocaleString("en-IN")}`}
            />

            <SummaryCard
                icon={ShoppingBag}
                title="Total Orders"
                value={totalOrders}
            />

            <SummaryCard
                icon={Package}
                title="Total Products"
                value={totalPublishedProducts}
            />
        </section>
    );
}