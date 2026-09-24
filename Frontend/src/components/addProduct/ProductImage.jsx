import React, { useRef } from "react";
import {
    Upload,
    Image as ImageIcon,
    X,
} from "lucide-react";

export default function ProductImage({
    image,
    onImageChange,
    onRemove,
    error,
}) {
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        console.log("PRODUCT IMAGE SELECTED:", {
            name: file.name,
            type: file.type,
            size: file.size,
            isFile: file instanceof File,
        });

        
        onImageChange?.(file);

        // Allow selecting the same file again
        e.target.value = "";
    };

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
                        <ImageIcon size={19} />
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
                            Product Image
                        </h2>

                        <p className="mt-1 text-xs text-slate-400">
                            Upload a clear image of your electronic item.
                        </p>
                    </div>
                </div>
            </div>

            {/* UPLOAD */}
            {!image ? (
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={`
                        flex
                        min-h-44
                        w-full
                        flex-col
                        items-center
                        justify-center
                        rounded-xl
                        border-2
                        border-dashed
                        bg-[#f6faf5]
                        px-5
                        text-center
                        transition-colors
                        duration-200
                        hover:border-green-400
                        hover:bg-green-50
                        ${
                            error
                                ? "border-red-400"
                                : "border-green-200"
                        }
                    `}
                >
                    <div
                        className="
                            flex h-12 w-12
                            items-center justify-center
                            rounded-xl
                            bg-green-50
                            text-[#063b2d]
                        "
                    >
                        <Upload size={21} />
                    </div>

                    <p
                        className="
                            mt-3
                            text-sm
                            font-semibold
                            text-[#063b2d]
                        "
                    >
                        Upload product image
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        PNG, JPG or JPEG
                    </p>
                </button>
            ) : (
                /* PREVIEW */
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-xl
                        border border-green-100
                        bg-[#f6faf5]
                    "
                >
                    <img
                        src={image.preview}
                        alt="Product preview"
                        className="
                            h-64
                            w-full
                            object-contain
                            p-4
                        "
                    />

                    <button
                        type="button"
                        onClick={onRemove}
                        aria-label="Remove product image"
                        className="
                            absolute
                            right-3
                            top-3
                            flex h-8 w-8
                            items-center justify-center
                            rounded-lg
                            bg-white
                            text-slate-500
                            shadow-sm
                            transition-colors
                            hover:bg-red-50
                            hover:text-red-600
                        "
                    >
                        <X size={16} />
                    </button>
                </div>
            )}

            {/* HIDDEN FILE INPUT */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleFileChange}
                className="hidden"
            />

            {error ? (
                <p className="mt-2 text-xs font-medium text-red-500">
                    {error}
                </p>
            ) : (
                <p className="mt-3 text-[10px] text-slate-400">
                    Recommended: clear product image with good lighting.
                    Maximum size: 5MB.
                </p>
            )}
        </section>
    );
}