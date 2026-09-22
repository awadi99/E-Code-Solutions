import React from "react";
import { FileText, IndianRupee } from "lucide-react";

export default function ProductDetails({ formData, onChange }) {
    return (
        <section
            className="
                rounded-2xl
                border border-green-100
                bg-white
                p-5
                shadow-sm
                sm:p-6
            "
        >
            {/* HEADER */}
            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <div
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-xl
                            border border-green-100
                            bg-green-50
                            text-[#063b2d]
                        "
                    >
                        <FileText size={19} />
                    </div>

                    <div>
                        <h2
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-tight
                                text-[#063b2d]
                            "
                        >
                            Product Details
                        </h2>

                        <p className="mt-1 text-xs text-slate-400">
                            Provide additional information about your product.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-5">
                {/* DESCRIPTION */}
                <div>
                    <label
                        htmlFor="description"
                        className="
                            mb-2
                            ml-1
                            block
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-slate-500
                        "
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={onChange}
                        rows={5}
                        placeholder="
                            Describe the product, its condition,
                            defects, accessories, etc.
                        "
                        className="
                            w-full
                            resize-none
                            rounded-xl
                            border border-green-100
                            bg-[#f6faf5]
                            px-4
                            py-3
                            text-sm
                            leading-6
                            text-slate-700
                            outline-none
                            transition-all
                            duration-200
                            placeholder:text-slate-400
                            hover:border-green-200
                            focus:border-green-400
                            focus:ring-2
                            focus:ring-green-100
                        "
                    />

                    <p className="mt-2 ml-1 text-[10px] text-slate-400">
                        Mention any damage, missing parts, accessories, or
                        other important information.
                    </p>
                </div>

                {/* PRICE */}
                <div>
                    <label
                        htmlFor="price"
                        className="
                            mb-2
                            ml-1
                            block
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-slate-500
                        "
                    >
                        Expected Price
                    </label>

                    <div className="relative">
                        <IndianRupee
                            size={16}
                            className="
                                pointer-events-none
                                absolute
                                left-3
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <input
                            id="price"
                            name="price"
                            type="number"
                            min="0"
                            value={formData.price}
                            onChange={onChange}
                            placeholder="Enter expected price"
                            className="
                                w-full
                                rounded-xl
                                border border-green-100
                                bg-[#f6faf5]
                                py-3
                                pl-9
                                pr-4
                                text-sm
                                text-slate-700
                                outline-none
                                transition-all
                                duration-200
                                placeholder:text-slate-400
                                hover:border-green-200
                                focus:border-green-400
                                focus:ring-2
                                focus:ring-green-100
                            "
                        />
                    </div>

                    <p className="mt-2 ml-1 text-[10px] text-slate-400">
                        Enter the price you expect to receive for this item.
                    </p>
                </div>
            </div>
        </section>
    );
}