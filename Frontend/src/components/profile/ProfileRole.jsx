import React from "react";
import {
    UserRound,
    BriefcaseBusiness,
    Building2,
    Package,
    ShoppingBag,
    ReceiptText,
} from "lucide-react";

export default function ProfileRole({ user }) {
    if (!user) return null;

    const role = user.role;

    return (
        <section className="mt-8">

            {/* Heading */}
            <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">
                    Account Role
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#063b2d]">
                    {role} Information
                </h2>
            </div>

            {/* USER */}
            {role === "User" && (
                <div className="border border-green-100 bg-white">

                    <RoleRow
                        icon={UserRound}
                        label="Account Type"
                        value="User"
                    />

                    <RoleRow
                        icon={Package}
                        label="Purpose"
                        value="E-Waste Submission"
                    />

                    <RoleRow
                        icon={ShoppingBag}
                        label="Activity"
                        value="Products, Orders & Sales"
                    />

                </div>
            )}

            {/* CUSTOMER */}
            {role === "Customer" && (
                <div className="border border-green-100 bg-white">

                    <RoleRow
                        icon={UserRound}
                        label="Account Type"
                        value="Customer"
                    />

                    <RoleRow
                        icon={BriefcaseBusiness}
                        label="Service"
                        value={user.service}
                    />

                    <RoleRow
                        icon={ShoppingBag}
                        label="Activity"
                        value="Orders & Purchases"
                    />

                    <RoleRow
                        icon={ReceiptText}
                        label="Documents"
                        value="Invoices"
                    />

                </div>
            )}

            {/* COMPANY */}
            {role === "Company" && (
                <div className="border border-green-100 bg-white">

                    <RoleRow
                        icon={Building2}
                        label="Company Name"
                        value={user.companyName}
                    />

                    <RoleRow
                        icon={Building2}
                        label="Agency Name"
                        value={user.agencyName}
                    />

                    <RoleRow
                        icon={BriefcaseBusiness}
                        label="Service"
                        value={user.service}
                    />

                    <RoleRow
                        icon={Package}
                        label="Activity"
                        value="Products, Orders & Invoices"
                    />

                </div>
            )}

        </section>
    );
}

function RoleRow({
    icon: Icon,
    label,
    value,
}) {
    return (
        <div className="flex items-center gap-4 border-b border-green-100 px-5 py-4 last:border-b-0">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6faf5] text-[#063b2d]">
                <Icon size={16} />
            </div>

            <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    {label}
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                    {value || "Not provided"}
                </p>
            </div>

        </div>
    );
}