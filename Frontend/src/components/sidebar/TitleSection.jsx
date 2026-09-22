import React from "react";
import { ChevronRight, BookOpen } from "lucide-react";

export const TitleSection = ({
    open,
    title = "Course Overview",
    subtitle = "Section 1.2",
}) => {
    return (
        <div className="mb-6 border-b border-green-100 pb-4">
            <div
                className="
                    flex cursor-pointer items-center justify-between
                    rounded-xl p-2
                    transition-all duration-200
                    hover:bg-[#f6faf5]
                    group
                "
            >
                <div className="flex items-center gap-4">
                    <div
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-lg
                            bg-green-50
                            text-[#063b2d]
                        "
                    >
                        <BookOpen size={20} strokeWidth={2.5} />
                    </div>

                    <div className="flex flex-col">
                        <span
                            className="
                                text-[10px] font-bold
                                uppercase tracking-widest
                                text-slate-400
                            "
                        >
                            {subtitle}
                        </span>

                        <h2
                            className="
                                text-lg font-bold
                                text-[#063b2d]
                                tracking-tight
                            "
                        >
                            {title}
                        </h2>
                    </div>
                </div>

                <div
                    className={`
                        text-[#063b2d]
                        transition-transform duration-300
                        transform-gpu
                        ${open ? "rotate-90" : "rotate-0"}
                    `}
                >
                    <ChevronRight size={20} />
                </div>
            </div>

            <div className="mt-2 h-0.5 w-8 rounded-full bg-[#063b2d]" />
        </div>
    );
};