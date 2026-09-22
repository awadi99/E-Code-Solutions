import React from "react";

export default function ProductFormField({
    label,
    name,
    type = "text",
    value = "",
    onChange,
    placeholder = "",
    required = false,
    min,
    disabled = false,
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

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={min}
                disabled={disabled}
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
                    placeholder:text-slate-400
                    hover:border-green-200
                    focus:border-green-400
                    focus:ring-2
                    focus:ring-green-100
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            />
        </div>
    );
}