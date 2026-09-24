import React from "react";
import Input from "../common/ui/Input";

const ProductInformation = ({ register, errors }) => {
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
            <div className="mb-6">
                <h2
                    className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-tight
                        text-[#063b2d]
                    "
                >
                    Product Information
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                    Enter the basic information about your electronic item.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* PRODUCT NAME */}
                <Input
                    label="Product Name"
                    placeholder="Samsung F62"
                    error={errors.productName?.message}
                    {...register("productName")}
                    className="bg-slate-50"
                />

                {/* CATEGORY */}
                <SelectField
                    label="Category"
                    name="category"
                    register={register}
                    error={errors.category?.message}
                    options={[
                        "Mobile",
                        "Laptop",
                        "Desktop",
                        "Television",
                        "Refrigerator",
                        "Washing Machine",
                        "Tablet",
                        "Computer Accessories",
                        "Other",
                    ]}
                />

                {/* BRAND */}
                <Input
                    label="Brand"
                    placeholder="e.g. Samsung"
                    error={errors.brand?.message}
                    {...register("brand")}
                    className="bg-slate-50"
                />

                {/* MODEL */}
                <Input
                    label="Model"
                    placeholder="e.g. SM-E625F"
                    error={errors.model?.message}
                    {...register("model")}
                    className="bg-slate-50"
                />

                {/* CONDITION */}
                <SelectField
                    label="Condition"
                    name="condition"
                    register={register}
                    error={errors.condition?.message}
                    options={[
                        "New",
                        "Like New",
                        "Good",
                        "Used",
                        "Damaged",
                        "Not Working",
                    ]}
                />

                {/* QUANTITY */}
                <Input
                    label="Quantity"
                    type="number"
                    min="1"
                    placeholder="Enter quantity"
                    error={errors.quantity?.message}
                    {...register("quantity")}
                    className="bg-slate-50"
                />
            </div>
        </section>
    );
};

export default ProductInformation;

function SelectField({
    label,
    name,
    register,
    options,
    error,
}) {
    return (
        <div className="w-full">
            <label
                htmlFor={name}
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
                {label}
            </label>

            <select
                id={name}
                {...register(name)}
                className={`
                    w-full
                    rounded-xl
                    border
                    bg-[#f6faf5]
                    px-4
                    py-3
                    text-sm
                    text-slate-700
                    outline-none
                    transition-all
                    duration-200
                    hover:border-green-200
                    focus:border-green-400
                    focus:ring-2
                    focus:ring-green-100
                    ${
                        error
                            ? "border-red-400"
                            : "border-green-100"
                    }
                `}
            >
                <option value="">
                    Select {label.toLowerCase()}
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>

            {error && (
                <p className="mt-1 ml-1 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}