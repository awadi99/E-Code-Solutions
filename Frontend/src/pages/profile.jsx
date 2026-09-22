import React, { useEffect, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    ShieldCheck,
    Building2,
    BriefcaseBusiness,
    CalendarDays,
    Package,
    ShoppingBag,
    ReceiptText,
    LogOut,
    ArrowUpRight,
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/auth/me`,
                    {
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to load profile");
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Profile error:", error);
            } finally {
                setLoading(false);
            }
        };

        getProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await fetch(`${API_BASE_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });

            window.location.href = "/sign-in";
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f6faf5] p-6">
                <div className="mx-auto max-w-6xl animate-pulse">
                    <div className="h-8 w-32 rounded bg-green-100" />
                    <div className="mt-8 h-28 rounded-2xl bg-white" />
                    <div className="mt-6 h-64 rounded-2xl bg-white" />
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center bg-[#f6faf5]">
                <div className="text-center">
                    <ShieldCheck
                        size={36}
                        className="mx-auto text-green-600"
                    />

                    <h2 className="mt-4 text-lg font-bold text-[#063b2d]">
                        Profile unavailable
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Please sign in again.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f6faf5]">
            <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">
                        Account
                    </p>

                    <h1 className="mt-1 text-3xl font-bold text-[#063b2d]">
                        Profile
                    </h1>

                    <p className="mt-1 text-sm text-slate-400">
                        Your account and platform information.
                    </p>
                </div>

                {/* Identity */}
                <section className="flex flex-col gap-6 border-y border-green-100 bg-white px-5 py-6 sm:flex-row sm:items-center sm:px-7">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-[#063b2d]">
                        <User size={34} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-2xl font-bold text-[#063b2d]">
                                {user.fullName}
                            </h2>

                            <RoleBadge role={user.role} />
                        </div>

                        <p className="mt-1 text-sm text-slate-400">
                            {user.email}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                        <span className="text-xs font-semibold text-green-700">
                            Active
                        </span>
                    </div>
                </section>

                {/* Account Overview */}
                <section className="mt-10">
                    <SectionHeader
                        label="Overview"
                        title="Account Overview"
                    />

                    <div className="mt-5 grid grid-cols-1 border-y border-green-100 bg-white sm:grid-cols-3">

                        <OverviewItem
                            icon={BriefcaseBusiness}
                            label="Role"
                            value={user.role}
                        />

                        <OverviewItem
                            icon={ShieldCheck}
                            label="Status"
                            value="Active"
                        />

                        <OverviewItem
                            icon={CalendarDays}
                            label="Member Since"
                            value={
                                user.createdAt
                                    ? new Date(
                                          user.createdAt
                                      ).toLocaleDateString("en-IN", {
                                          month: "short",
                                          year: "numeric",
                                      })
                                    : "September 2026"
                            }
                        />

                    </div>
                </section>

                {/* Personal Information */}
                <section className="mt-10">
                    <SectionHeader
                        label="Personal"
                        title="Contact Information"
                    />

                    <div className="mt-5 grid grid-cols-1 gap-x-8 border-y border-green-100 bg-white md:grid-cols-2">

                        <InfoItem
                            icon={User}
                            label="Full Name"
                            value={user.fullName}
                        />

                        <InfoItem
                            icon={Mail}
                            label="Email"
                            value={user.email}
                        />

                        <InfoItem
                            icon={Phone}
                            label="Phone"
                            value={user.phone}
                        />

                        <InfoItem
                            icon={MapPin}
                            label="Location"
                            value={user.location}
                        />

                    </div>
                </section>

                {/* USER */}
                {user.role === "User" && (
                    <UserProfileSection />
                )}

                {/* CUSTOMER */}
                {user.role === "Customer" && (
                    <CustomerProfileSection user={user} />
                )}

                {/* COMPANY */}
                {user.role === "Company" && (
                    <CompanyProfileSection user={user} />
                )}

                {/* Logout */}
                <section className="mt-12 border-t border-green-100 pt-6">

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="group flex w-full items-center justify-between bg-white px-5 py-5 transition-colors hover:bg-red-50"
                    >
                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                <LogOut size={18} />
                            </div>

                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-700">
                                    Logout
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    Sign out from your E-Code account.
                                </p>
                            </div>

                        </div>

                        <ArrowUpRight
                            size={18}
                            className="text-slate-300 transition group-hover:text-red-500"
                        />

                    </button>

                </section>
            </div>
        </div>
    );
}

/* ------------------------------------------------ */
/* USER                                         */
/* ------------------------------------------------ */

function UserProfileSection() {
    return (
        <section className="mt-10">

            <SectionHeader
                label="User"
                title="E-Waste Activity"
            />

            <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-green-100 bg-green-100 sm:grid-cols-3">

                <ActivityItem
                    icon={Package}
                    title="Products"
                    description="View your submitted electronic waste products."
                />

                <ActivityItem
                    icon={ShoppingBag}
                    title="Orders"
                    description="Track your purchases and orders."
                />

                <ActivityItem
                    icon={ReceiptText}
                    title="Sales"
                    description="View products sold to companies."
                />

            </div>
        </section>
    );
}

/* ------------------------------------------------ */
/* CUSTOMER                                      */
/* ------------------------------------------------ */

function CustomerProfileSection({ user }) {
    return (
        <section className="mt-10">

            <SectionHeader
                label="Customer"
                title="Customer Information"
            />

            {/* Service */}
            <div className="mt-5 border-y border-green-100 bg-white px-5 py-6 sm:px-7">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-[#063b2d]">
                            <BriefcaseBusiness size={19} />
                        </div>

                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                Service
                            </p>

                            <p className="mt-1 text-base font-bold text-[#063b2d]">
                                {user.service || "Not provided"}
                            </p>
                        </div>

                    </div>

                    <RoleBadge role="Customer" />

                </div>
            </div>

            {/* Customer Activity */}
            <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-green-100 bg-green-100 sm:grid-cols-2">

                <ActivityItem
                    icon={ShoppingBag}
                    title="Orders & Purchases"
                    description="View your purchased electronic products and orders."
                />

                <ActivityItem
                    icon={ReceiptText}
                    title="Invoices"
                    description="View invoices connected to your orders."
                />

            </div>

        </section>
    );
}

/* ------------------------------------------------ */
/* COMPANY                                       */
/* ------------------------------------------------ */

function CompanyProfileSection({ user }) {
    return (
        <section className="mt-10">

            <SectionHeader
                label="Company"
                title="Business Information"
            />

            {/* Company Details */}
            <div className="mt-5 divide-y divide-green-100 border-y border-green-100 bg-white">

                <BusinessItem
                    icon={Building2}
                    label="Company Name"
                    value={user.companyName}
                />

                <BusinessItem
                    icon={Building2}
                    label="Agency Name"
                    value={user.agencyName}
                />

                <BusinessItem
                    icon={BriefcaseBusiness}
                    label="Service"
                    value={user.service}
                />

            </div>

            {/* Company Activity */}
            <div className="mt-5 grid grid-cols-1 gap-px overflow-hidden border border-green-100 bg-green-100 sm:grid-cols-3">

                <ActivityItem
                    icon={Package}
                    title="Products"
                    description="View and manage your listed products."
                />

                <ActivityItem
                    icon={ShoppingBag}
                    title="Orders"
                    description="View orders received from customers."
                />

                <ActivityItem
                    icon={ReceiptText}
                    title="Invoices"
                    description="View your company invoices."
                />

            </div>

        </section>
    );
}

/* ------------------------------------------------ */
/* COMPONENTS                                    */
/* ------------------------------------------------ */

function SectionHeader({ label, title }) {
    return (
        <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-600">
                {label}
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#063b2d]">
                {title}
            </h2>
        </div>
    );
}

function RoleBadge({ role }) {
    const styles = {
        User: "bg-green-50 text-green-700",
        Customer: "bg-blue-50 text-blue-700",
        Company: "bg-amber-50 text-amber-700",
    };

    return (
        <span
            className={`rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider ${
                styles[role] || "bg-slate-100 text-slate-600"
            }`}
        >
            {role}
        </span>
    );
}

function OverviewItem({
    icon: Icon,
    label,
    value,
}) {
    return (
        <div className="flex items-center gap-4 border-b border-green-100 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6faf5] text-[#063b2d]">
                <Icon size={17} />
            </div>

            <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    {label}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-700">
                    {value}
                </p>
            </div>

        </div>
    );
}

function InfoItem({
    icon: Icon,
    label,
    value,
}) {
    return (
        <div className="flex items-center gap-4 border-b border-green-100 px-5 py-5 md:px-7">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f6faf5] text-[#063b2d]">
                <Icon size={16} />
            </div>

            <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {label}
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-slate-700">
                    {value || "Not provided"}
                </p>
            </div>

        </div>
    );
}

function BusinessItem({
    icon: Icon,
    label,
    value,
}) {
    return (
        <div className="flex flex-col gap-2 px-5 py-5 sm:grid sm:grid-cols-[220px_1fr] sm:items-center sm:px-7">

            <div className="flex items-center gap-3">
                <Icon
                    size={16}
                    className="text-green-600"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    {label}
                </span>
            </div>

            <p className="text-sm font-bold text-[#063b2d]">
                {value || "Not provided"}
            </p>

        </div>
    );
}

function ActivityItem({
    icon: Icon,
    title,
    description,
}) {
    return (
        <div className="bg-white p-6">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6faf5] text-[#063b2d]">
                <Icon size={18} />
            </div>

            <h3 className="mt-5 text-sm font-bold text-[#063b2d]">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-400">
                {description}
            </p>

        </div>
    );
}