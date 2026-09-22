import React, { useState, useCallback } from "react";
import { Menu, X, LayoutDashboard } from "lucide-react";
import SidebarMenu from "../components/sidebar/SidebarMenu";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <>
            {/* MOBILE TOGGLE */}
            {!open && (
                <button
                    type="button"
                    onClick={toggleSidebar}
                    aria-label="Open sidebar"
                    className="
                        fixed left-4 top-4 z-[60]
                        flex h-10 w-10
                        items-center justify-center
                        rounded-lg
                        border border-slate-200
                        bg-white
                        shadow-sm
                        transition-all duration-200
                        hover:border-green-200
                        hover:bg-[#f6faf5]
                        active:scale-95
                        sm:left-5 sm:top-5
                        md:hidden
                    "
                >
                    <Menu
                        size={20}
                        strokeWidth={2}
                        className="text-[#063b2d]"
                    />
                </button>
            )}

            {/* MOBILE BACKDROP */}
            <div
                onClick={toggleSidebar}
                aria-hidden="true"
                className={`
                    fixed inset-0 z-[70]
                    bg-[#063b2d]/20
                    backdrop-blur-[1px]
                    transition-opacity duration-300
                    md:hidden
                    ${
                        open
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                    }
                `}
            />

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed left-0 top-0 z-[80]
                    flex h-[100dvh]
                    w-[280px] max-w-[85vw]
                    flex-col
                    border-r border-slate-200
                    bg-white
                    shadow-xl shadow-slate-900/5
                    transition-transform duration-300 ease-out
                    transform-gpu
                    ${
                        open
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                    md:w-64
                    md:translate-x-0
                    md:shadow-none
                `}
                style={{ willChange: "transform" }}
            >
                {/* HEADER */}
                <div
                    className="
                        flex shrink-0
                        items-center justify-between
                        border-b border-slate-100
                        px-5 py-5
                        sm:px-6 sm:py-7
                    "
                >
                    <div className="flex min-w-0 items-center gap-3">
                        {/* LOGO */}
                        <div
                            className="
                                flex h-10 w-10
                                shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-[#063b2d]
                                shadow-sm
                                sm:h-11 sm:w-11
                            "
                        >
                            <img
                                src="/image/logo.png"
                                className="h-8 w-8 object-contain"
                                alt="E-Code Solutions"
                            />
                        </div>

                        {/* BRAND */}
                        <div className="flex min-w-0 flex-col leading-tight">
                            <span
                                className="
                                    truncate
                                    text-sm
                                    font-black
                                    tracking-tight
                                    text-[#063b2d]
                                    sm:text-base
                                "
                            >
                                E-Code Solutions
                            </span>

                            <span
                                className="
                                    mt-0.5
                                    truncate
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.16em]
                                    text-green-600
                                    sm:text-[9px]
                                "
                            >
                                E-Waste Management
                            </span>
                        </div>
                    </div>

                    {/* MOBILE CLOSE */}
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        aria-label="Close sidebar"
                        className="
                            ml-2
                            flex h-8 w-8
                            shrink-0
                            items-center justify-center
                            rounded-lg
                            text-slate-400
                            transition-colors
                            hover:bg-[#f6faf5]
                            hover:text-[#063b2d]
                            md:hidden
                        "
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* NAVIGATION */}
                <div
                    className="
                        min-h-0
                        flex-1
                        overflow-y-auto
                        overscroll-contain
                        px-2
                        py-3
                        sm:px-3
                    "
                >
                    <div
                        className="
                            mb-2
                            px-3
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-slate-400
                            sm:px-4
                            sm:text-[10px]
                            sm:tracking-widest
                        "
                    >
                        Main Menu
                    </div>

                    <SidebarMenu expanded={true} />
                </div>

                {/* FOOTER */}
                <div
                    className="
                        shrink-0
                        border-t border-slate-100
                        bg-[#f6faf5]
                        p-3
                        sm:p-4
                    "
                >
                    <div
                        className="
                            flex items-center gap-3
                            rounded-xl
                            border border-green-100
                            bg-white
                            p-3
                            shadow-sm
                        "
                    >
                        {/* STATUS ICON */}
                        <div
                            className="
                                relative
                                flex h-8 w-8
                                shrink-0
                                items-center justify-center
                                rounded-full
                                bg-green-50
                                text-[#063b2d]
                            "
                        >
                            <LayoutDashboard size={16} />

                            <span
                                className="
                                    absolute
                                    bottom-0 right-0
                                    h-2.5 w-2.5
                                    rounded-full
                                    border-2 border-white
                                    bg-green-500
                                "
                            />
                        </div>

                        {/* FOOTER TEXT */}
                        <div className="flex min-w-0 flex-col">
                            <h4
                                className="
                                    truncate
                                    text-[11px]
                                    font-bold
                                    leading-none
                                    text-[#063b2d]
                                    sm:text-[12px]
                                "
                            >
                                E-Code Solutions
                            </h4>

                            <span
                                className="
                                    mt-1
                                    truncate
                                    text-[9px]
                                    font-medium
                                    text-slate-400
                                    sm:text-[10px]
                                "
                            >
                                E-Waste Management
                            </span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}