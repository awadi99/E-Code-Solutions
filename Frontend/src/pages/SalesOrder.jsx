import React, { useMemo, useState } from "react";
import { IndianRupee } from "lucide-react";

import SalesSummary from "../components/salesOrder/SalesSummary";
import SalesSearch from "../components/salesOrder/SalesSearch";
import SalesList from "../components/salesOrder/SalesList";
import temporarySalesOrders from "../components/salesOrder/temporarySalesOrders";

export default function SalesOrder() {
    const [search, setSearch] = useState("");

    const filteredOrders = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return temporarySalesOrders;
        }

        return temporarySalesOrders.filter((order) =>
            [
                order.id,
                order.product,
                order.condition,
                order.buyer,
                order.status,
            ]
                .join(" ")
                .toLowerCase()
                .includes(query)
        );
    }, [search]);

    // Total money from all sales
    const totalSales = temporarySalesOrders.reduce(
        (total, order) => total + order.amount,
        0
    );

    // Total number of orders
    const totalOrders = temporarySalesOrders.length;

    // Temporary published product count
    const totalPublishedProducts = temporarySalesOrders.length;

    const handleViewOrder = (order) => {
        console.log("Selected order:", order);
    };

    return (
        <div
            className="
                min-h-screen w-full
                bg-[#f6faf5]
                p-4 sm:p-6
                lg:p-8 xl:p-10
            "
        >
            {/* HEADER */}
            <header className="mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div
                        className="
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-[#063b2d]
                            text-white
                            shadow-sm
                            sm:h-14 sm:w-14
                            sm:rounded-2xl
                        "
                    >
                        <IndianRupee
                            size={23}
                            className="sm:hidden"
                        />

                        <IndianRupee
                            size={28}
                            className="hidden sm:block"
                        />
                    </div>

                    <div className="min-w-0">
                        <h1
                            className="
                                text-xl font-bold tracking-tight
                                text-[#063b2d]
                                sm:text-2xl lg:text-3xl
                            "
                        >
                            Sales & Order
                        </h1>

                        <p
                            className="
                                mt-1 text-[9px] font-bold
                                uppercase tracking-[0.15em]
                                text-slate-400
                                sm:text-[10px]
                                sm:tracking-widest
                            "
                        >
                            Manage your sales and orders
                        </p>
                    </div>
                </div>
            </header>

            {/* SUMMARY */}
            <SalesSummary
                totalSales={totalSales}
                totalOrders={totalOrders}
                totalPublishedProducts={totalPublishedProducts}
            />

            {/* SALES & ORDERS */}
            <section className="mt-8">
                <div
                    className="
                        mb-4 flex flex-col gap-4
                        sm:mb-5
                        md:flex-row md:items-center
                        md:justify-between
                    "
                >
                    <div>
                        <h2
                            className="
                                text-sm font-bold uppercase
                                tracking-tight text-[#063b2d]
                            "
                        >
                            Sales & Orders
                        </h2>

                        <p
                            className="
                                mt-1 text-[10px]
                                font-medium text-slate-400
                            "
                        >
                            Track products sold and their order status
                        </p>
                    </div>

                    <SalesSearch
                        value={search}
                        onChange={setSearch}
                    />
                </div>

                <SalesList
                    orders={filteredOrders}
                    onView={handleViewOrder}
                />
            </section>
        </div>
    );
}