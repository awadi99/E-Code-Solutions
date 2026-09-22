import React from "react";
import ProductFormField from "./ProductFormField";

const ProductInformation = ({ formData, onChange }) => {
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

            {/* FIELDS */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* PRODUCT NAME */}
                <ProductFormField
                    label="Product Name"
                    name="productName"
                    value={formData.productName}
                    onChange={onChange}
                    placeholder="e.g. Samsung Galaxy F62"
                    required
                />

                {/* CATEGORY */}
                <SelectField
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={onChange}
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
                <ProductFormField
                    label="Brand"
                    name="brand"
                    value={formData.brand}
                    onChange={onChange}
                    placeholder="e.g. Samsung"
                />

                {/* MODEL */}
                <ProductFormField
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={onChange}
                    placeholder="e.g. SM-E625F"
                />

                {/* CONDITION */}
                <SelectField
                    label="Condition"
                    name="condition"
                    value={formData.condition}
                    onChange={onChange}
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
                <ProductFormField
                    label="Quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={onChange}
                    placeholder="Enter quantity"
                />
            </div>
        </section>
    );
};

export default ProductInformation;


/* ---------------------------------------------
   SELECT FIELD
--------------------------------------------- */

function SelectField({
    label,
    name,
    value,
    onChange,
    options,
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
                name={name}
                value={value}
                onChange={onChange}
                required
                className="
                    w-full
                    rounded-xl
                    border border-green-100
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
                "
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
        </div>
    );
}