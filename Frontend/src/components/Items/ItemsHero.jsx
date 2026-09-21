import React from "react";
import { motion } from "framer-motion";

export default function ItemsHero() {
    return (
        <section className="relative min-h-[70vh] overflow-hidden bg-[#063b2d]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: "url('/img/nature2.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#063b2d]/80" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[70vh] items-center">
                <div className="mx-auto w-full max-w-6xl px-6 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-green-300">
                            E-Code Solutions
                        </p>

                        <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                            Products
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                            Discover electronics available for reuse,
                            restoration, and responsible recycling.
                            Give old devices a second life instead of
                            letting them become waste.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}