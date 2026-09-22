import React, { useState } from "react";
import {
    PackagePlus,
    CheckCircle2,
} from "lucide-react";

import ProductInformation from "../components/addProduct/ProductInformation";
import ProductDetails from "../components/addProduct/ProductDetails";
import ProductImage from "../components/addProduct/ProductImage";

export default function AddProducts() {
    const [formData, setFormData] = useState({
        productName: "",
        category: "",
        brand: "",
        model: "",
        condition: "",
        quantity: "",
        description: "",
        price: "",
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (file) => {
        if (!file) return;

        setImage({
            file,
            preview: URL.createObjectURL(file),
        });
    };

    const removeImage = () => {
        if (image?.preview) {
            URL.revokeObjectURL(image.preview);
        }

        setImage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            ...formData,
            image: image?.file || null,
        };

        console.log("Product data:", productData);

        // API will be connected here later.
    };

    return (
        <div
            className="
                min-h-screen
                w-full
                bg-[#f6faf5]
                p-4
                sm:p-6
                lg:p-8
                xl:p-10
            "
        >
            {/* HEADER */}
            <header className="mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div
                        className="
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-[#063b2d]
                            text-white
                            shadow-sm
                            sm:h-14 sm:w-14
                            sm:rounded-2xl
                        "
                    >
                        <PackagePlus
                            size={23}
                            className="sm:hidden"
                        />

                        <PackagePlus
                            size={28}
                            className="hidden sm:block"
                        />
                    </div>

                    <div className="min-w-0">
                        <h1
                            className="
                                text-xl
                                font-bold
                                tracking-tight
                                text-[#063b2d]
                                sm:text-2xl
                                lg:text-3xl
                            "
                        >
                            Add Product
                        </h1>

                        <p
                            className="
                                mt-1
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-slate-400
                                sm:text-[10px]
                                sm:tracking-widest
                            "
                        >
                            Publish your electronic waste
                        </p>
                    </div>
                </div>
            </header>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="
                    mx-auto
                    w-full
                    max-w-5xl
                    space-y-6
                "
            >
                {/* PRODUCT INFORMATION */}
                <ProductInformation
                    formData={formData}
                    onChange={handleChange}
                />

                {/* PRODUCT DETAILS */}
                <ProductDetails
                    formData={formData}
                    onChange={handleChange}
                />

                {/* PRODUCT IMAGE */}
                <ProductImage
                    image={image}
                    onImageChange={handleImageChange}
                    onRemove={removeImage}
                />

                {/* PUBLISH */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-[#063b2d]
                            px-6
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-sm
                            transition-all
                            duration-200
                            hover:bg-green-800
                            hover:shadow-md
                            active:scale-[0.98]
                        "
                    >
                        <CheckCircle2 size={17} />
                        Publish Product
                    </button>
                </div>
            </form>
        </div>
    );
}