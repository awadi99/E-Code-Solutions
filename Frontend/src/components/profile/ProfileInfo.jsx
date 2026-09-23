import React from "react";
import { User, Mail } from "lucide-react";

export default function ProfileInfo({ user }) {
    const information = [
        {
            icon: User,
            label: "Full Name",
            value: user?.fullName,
        },
        {
            icon: Mail,
            label: "Email Address",
            value: user?.email,
        },
    ];

    return (
        <section className="mt-8">
            <div className="mb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-600">
                    Personal
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#063b2d]">
                    Personal Information
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-green-100 bg-green-100 sm:grid-cols-2">
                {information.map(({ icon: Icon, label, value }) => (
                    <div
                        key={label}
                        className="flex items-center gap-4 bg-white px-5 py-5"
                    >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f6faf5] text-[#063b2d]">
                            <Icon size={17} />
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
                ))}
            </div>
        </section>
    );
}