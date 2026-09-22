import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle } from "lucide-react";

export const AddLayout = ({ children, title, subtitle ,direction }) => {
    return (
        <section className="min-h-dvh bg-[#f6faf5] text-slate-900">
            {direction ==="left"?
                (
            <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">

                {/* ================= LEFT VIDEO ================= */}
                <motion.section
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="
                        relative hidden
                        min-h-dvh
                        overflow-hidden
                        bg-[#063b2d]
                        lg:block
                    "
                >
                    <video
                        src="/image/hello animation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            opacity-65
                        "
                    />

                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-[#063b2d]/60" />

                    <div
                        className="
                            relative z-10
                            flex min-h-dvh
                            flex-col justify-between
                            p-8
                            sm:p-10
                            xl:p-16
                        "
                    >

                        {/* Brand */}
                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex h-12 w-12
                                    shrink-0
                                    items-center justify-center
                                    rounded-2xl
                                    bg-black/50
                                    text-[#063b2d]
                                "
                            >
                                <img src="/image/logo.png" className="h-9 w-9"/>
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-black text-white">
                                    E-Code Solutions
                                </p>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-green-300/70">
                                    E-Waste Management
                                </p>
                            </div>

                        </div>


                        {/* Bottom Content */}
                        <div className="max-w-xl pb-4">

                            <Leaf
                                size={25}
                                className="mb-5 text-green-300"
                            />

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-white
                                    sm:text-4xl
                                    xl:text-5xl
                                "
                            >
                                Join the movement

                                <span className="block text-green-300">
                                    for a cleaner future.
                                </span>
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-green-50/60
                                "
                            >
                                Create your account and become part of a
                                platform focused on responsible electronic
                                waste management.
                            </p>

                        </div>

                    </div>
                </motion.section>


                {/* ================= RIGHT FORM ================= */}
                <section
                    className="
                        relative
                        flex
                        min-h-dvh
                        w-full
                        items-start
                        justify-center
                        overflow-x-hidden
                        px-4
                        py-8
                        sm:px-6
                        sm:py-10
                        md:px-8
                        lg:items-center
                        lg:px-10
                        lg:py-12
                        xl:px-16
                    "
                >

                    {/* Soft Background Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-[350px]
                            w-[350px]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-green-500/5
                            blur-[100px]
                            sm:h-[450px]
                            sm:w-[450px]
                        "
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="
                            relative z-10
                            w-full
                            max-w-[560px]
                        "
                    >

                        {/* Mobile Brand */}
                        <div className="mb-7 flex items-center gap-3 lg:hidden">

                            <div
                                className="
                                    flex h-12 w-12
                                    shrink-0
                                    items-center justify-center
                                    rounded-2xl
                                    bg-[#064e3b]
                                    text-green-300
                                "
                            >
                                <img src="/image/logo.png" className="h-9 w-9" alt="" />
                            </div>

                            <div>
                                <p className="text-sm font-black text-[#064e3b]">
                                    E-Code Solutions
                                </p>

                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-600">
                                    E-Waste Management
                                </p>
                            </div>

                        </div>


                        {/* Header */}
                        <div className="mb-7 sm:mb-8">

                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-600">
                                E-Code Solutions
                            </p>

                            <h1
                                className="
                                    mt-2
                                    text-2xl
                                    font-black
                                    tracking-tight
                                    text-[#063b2d]
                                    sm:text-3xl
                                    md:text-4xl
                                "
                            >
                                {title}
                            </h1>

                            {subtitle && (
                                <p
                                    className="
                                        mt-3
                                        max-w-md
                                        text-xs
                                        font-medium
                                        leading-6
                                        text-slate-500
                                        sm:text-sm
                                    "
                                >
                                    {subtitle}
                                </p>
                            )}

                        </div>


                        {/* Form Card */}
                        <div
                            className="
                                w-full
                                rounded-2xl
                                border border-slate-200
                                bg-white
                                p-5
                                shadow-xl
                                shadow-slate-900/5
                                sm:p-7
                                md:p-9
                            "
                        >
                            {children}
                        </div>

                    </motion.div>

                </section>

            </div>
            ):(

            <div className="grid min-h-dvh grid-cols-1 lg:grid-cols-2">

               


                {/* ================= RIGHT FORM ================= */}
                <section
                    className="
                        relative
                        flex
                        min-h-dvh
                        w-full
                        items-start
                        justify-center
                        overflow-x-hidden
                        px-4
                        py-8
                        sm:px-6
                        sm:py-10
                        md:px-8
                        lg:items-center
                        lg:px-10
                        lg:py-12
                        xl:px-16
                    "
                >

                    {/* Soft Background Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-[350px]
                            w-[350px]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-green-500/5
                            blur-[100px]
                            sm:h-[450px]
                            sm:w-[450px]
                        "
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="
                            relative z-10
                            w-full
                            max-w-[560px]
                        "
                    >

                        {/* Mobile Brand */}
                        <div className="mb-7 flex items-center gap-3 lg:hidden">

                            <div
                                className="
                                    flex h-12 w-12
                                    shrink-0
                                    items-center justify-center
                                    rounded-2xl
                                    bg-[#064e3b]
                                    text-green-300
                                "
                            >
                                <img src="/image/logo.png" className="h-9 w-9" alt="" />
                            </div>

                            <div>
                                <p className="text-sm font-black text-[#064e3b]">
                                    E-Code Solutions
                                </p>

                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-600">
                                    E-Waste Management
                                </p>
                            </div>

                        </div>


                        {/* Header */}
                        <div className="mb-7 sm:mb-8">

                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-600">
                                E-Code Solutions
                            </p>

                            <h1
                                className="
                                    mt-2
                                    text-2xl
                                    font-black
                                    tracking-tight
                                    text-[#063b2d]
                                    sm:text-3xl
                                    md:text-4xl
                                "
                            >
                                {title}
                            </h1>

                            {subtitle && (
                                <p
                                    className="
                                        mt-3
                                        max-w-md
                                        text-xs
                                        font-medium
                                        leading-6
                                        text-slate-500
                                        sm:text-sm
                                    "
                                >
                                    {subtitle}
                                </p>
                            )}

                        </div>


                        {/* Form Card */}
                        <div
                            className="
                                w-full
                                rounded-2xl
                                border border-slate-200
                                bg-white
                                p-5
                                shadow-xl
                                shadow-slate-900/5
                                sm:p-7
                                md:p-9
                            "
                        >
                            {children}
                        </div>

                    </motion.div>

                </section>
                 {/* ================= LEFT VIDEO ================= */}
                 <motion.section
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="
                        relative hidden
                        min-h-dvh
                        overflow-hidden
                        bg-[#063b2d]
                        lg:block
                    "
                >
                    <video
                        src="/image/hello animation.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="
                            absolute inset-0
                            h-full w-full
                            object-cover
                            opacity-65
                        "
                    />

                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-[#063b2d]/60" />

                    <div
                        className="
                            relative z-10
                            flex min-h-dvh
                            flex-col justify-between
                            p-8
                            sm:p-10
                            xl:p-16
                        "
                    >

                        {/* Brand */}
                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex h-12 w-12
                                    shrink-0
                                    items-center justify-center
                                    rounded-2xl
                                    bg-black/50
                                    text-[#063b2d]
                                "
                            >
                                <img src="/image/logo.png" className="h-9 w-9"/>
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-black text-white">
                                    E-Code Solutions
                                </p>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-green-300/70">
                                    E-Waste Management
                                </p>
                            </div>

                        </div>


                        {/* Bottom Content */}
                        <div className="max-w-xl pb-4">

                            <Leaf
                                size={25}
                                className="mb-5 text-green-300"
                            />

                            <h2
                                className="
                                    text-3xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-white
                                    sm:text-4xl
                                    xl:text-5xl
                                "
                            >
                                Join the movement

                                <span className="block text-green-300">
                                    for a cleaner future.
                                </span>
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-green-50/60
                                "
                            >
Welcome back and continue your journey toward responsible electronic waste management.
                            </p>

                        </div>

                    </div>
                </motion.section>

            </div>
            )
        }
        </section>
    );
};

export default AddLayout;