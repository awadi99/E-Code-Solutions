import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactData from "../../constants/contact-data";
import Button from "../common/ui/Button";
import Input from "../common/ui/Input";
import contactSchema from "../../schema/contact.schema.js";
import { useContact } from "../../hook/useContact.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";



export default function ContactUs() {

    const { createContact } = useContact();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        createContact.mutate(data, {
            onSuccess: (res) => {
                toast.success("Contact submitted successfully");
                reset();
            },
            onError: () => {
                toast.error("Contact submission failed !");
            }
        });
    };
    return (
        <section
            id="contact"
            className="
                bg-[#f0fdf4]
                px-5 py-20
                sm:px-6
                md:px-10 md:py-24
                lg:px-20
            "
        >
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <p className="
                        mb-3
                        text-[11px] font-bold uppercase
                        tracking-[0.2em]
                        text-green-700
                    ">
                        Contact Us
                    </p>

                    <h2 className="
                        text-3xl font-bold
                        tracking-tight
                        text-[#063b2d]
                        sm:text-4xl
                    ">
                        Let's Build a
                        <span className="text-green-600">
                            {" "}Greener Future.
                        </span>
                    </h2>

                    <p className="
                        mx-auto mt-4
                        max-w-xl
                        text-sm leading-6
                        text-slate-500
                        sm:text-base
                    ">
                        Have a question, want to sell your e-waste, or want to
                        work with us? Send us a message.
                    </p>
                </motion.div>

                <div className="
                    grid
                    items-start
                    gap-10
                    lg:grid-cols-[0.9fr_1.1fr]
                    lg:gap-14
                ">

                    {/* Contact Data */}
                    <div className="space-y-4">
                        {contactData.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        group
                                        flex gap-4
                                        rounded-xl
                                        border border-green-100
                                        bg-white
                                        p-5
                                        shadow-sm
                                        shadow-green-900/[0.03]
                                        transition-all duration-200
                                        hover:-translate-y-0.5
                                        hover:border-green-200
                                        hover:shadow-md
                                        hover:shadow-green-900/[0.05]
                                    "
                                >
                                    <div className="
                                        flex h-11 w-11 shrink-0
                                        items-center justify-center
                                        rounded-xl
                                        bg-[#063b2d]
                                        text-green-300
                                        transition-colors duration-200
                                        group-hover:bg-green-600
                                        group-hover:text-white
                                    ">
                                        <Icon
                                            size={20}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="
                                            text-base font-semibold
                                            text-slate-900
                                        ">
                                            {item.title}
                                        </h3>

                                        <p className="
                                            mt-1.5
                                            text-sm leading-6
                                            text-slate-500
                                        ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.35,
                            delay: 0.05,
                        }}
                        className="
                            rounded-2xl
                            border border-green-100
                            bg-white
                            p-6
                            shadow-sm
                            shadow-green-900/[0.04]
                            sm:p-7
                            md:p-8
                        "
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="space-y-0">
                            <Input
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                error={errors.name?.message}
                                {...register("name")}
                            />

                            <div className="mt-5">
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    error={errors.email?.message}
                                    {...register("email")}
                                />
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="message"
                                    className="
            mb-2 block
            ml-1
            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]
            text-slate-500
        "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className={`
            w-full
            resize-none
            rounded-xl
            border
            bg-white
            px-4 py-3
            text-sm
            leading-6
            text-slate-900
            outline-none
            transition-all duration-200
            placeholder:text-slate-400
            hover:border-slate-300
            focus:ring-4
            ${errors.message
                                            ? "border-red-500 ring-4 ring-red-500/10"
                                            : "border-slate-200 focus:border-green-500 focus:ring-green-500/10"
                                        }
        `}
                                    {...register("message")}
                                />

                                {errors.message && (
                                    <p className="
            mt-2
            ml-1
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-red-500
        ">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6">
                                <Button
                                    type="submit"
                                    className="w-full"

                                    loading={createContact.isPending}
                                    disabled={createContact.isPending}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}