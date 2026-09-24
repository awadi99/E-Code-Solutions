import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    PackagePlus,
} from "lucide-react";

import ProductInformation from "../components/addProduct/ProductInformation";
import ProductDetails from "../components/addProduct/ProductDetails";
import ProductImage from "../components/addProduct/ProductImage";
import Button from "../components/common/ui/Button.jsx";

import { addproductSchema } from "../schema/add.product.schema.js";
import { useAddProject } from "../hook/useAddProject.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(addproductSchema),

        defaultValues: {
            productName: "",
            category: "",
            brand: "",
            model: "",
            condition: "",
            quantity: "",
            description: "",
            expectedPrice: "",
            productImage: undefined,
        },
    });

    const { createProduct } = useAddProject();

    // =========================
    // IMAGE
    // =========================

    const handleImageChange = (file) => {
        if (!file) return;

        if (image?.preview) {
            URL.revokeObjectURL(image.preview);
        }

        const imageData = {
            file,
            preview: URL.createObjectURL(file),
        };

        setImage(imageData);

        setValue("productImage", file, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const removeImage = () => {
        if (image?.preview) {
            URL.revokeObjectURL(image.preview);
        }

        setImage(null);

        setValue("productImage", undefined, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    // =========================
    // SUBMIT
    // =========================

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            formData.append("productName", data.productName);
            formData.append("category", data.category);
            formData.append("brand", data.brand);
            formData.append("model", data.model);
            formData.append("condition", data.condition);
            formData.append("quantity", data.quantity);
            formData.append("description", data.description);
            formData.append("expectedPrice", data.expectedPrice);
            formData.append("productImage", data.productImage);

            await createProduct.mutateAsync(formData);

            toast.success("Product created successfully");

            reset();
            // Reset React Hook Form
            // reset() can be added here next.

        } catch (error) {
            console.error(
                "Create Product Error:",
                error.response?.data?.message ||
                error.message
            );
        }
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
                onSubmit={handleSubmit(onSubmit)}
                className="
                    mx-auto
                    w-full
                    max-w-5xl
                    space-y-6
                "
            >

                {/* PRODUCT INFORMATION */}
                <ProductInformation
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                />

                {/* PRODUCT DETAILS */}
                <ProductDetails
                    register={register}
                    errors={errors}
                />

                {/* PRODUCT IMAGE */}
                <ProductImage
                    image={image}
                    onImageChange={handleImageChange}
                    onRemove={removeImage}
                    error={errors.productImage?.message}
                />

                {/* PUBLISH */}
                <div className="flex items-center justify-between">
                    <Button
                        onClick={()=>navigate("/main/addproduct")}
                        className="
                            bg-[#063b2d]
                            hover:bg-green-800
                        "
                    >
                        back 
                    </Button>

                    <Button
                        type="submit"
                        loading={createProduct.isPending}
                        disabled={createProduct.isPending}
                        className="
                            bg-[#063b2d]
                            hover:bg-green-800
                        "
                    >
                        Publish Product
                    </Button>

                </div>

            </form>
        </div>
    );
}