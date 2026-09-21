import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Recycle } from "lucide-react";

export default function TOC() {
    return (
        <main className="min-h-screen bg-[#f6faf5] text-slate-900">

            {/* Header */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064e3b] text-green-300">
                            <img src="/image/logo.png" className="h-10 w-10" alt="" />
                        </div>

                        <div>
                            <p className="text-sm font-black text-[#064e3b]">
                                E-Code Solutions
                            </p>

                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-600">
                                E-Waste Management
                            </p>
                        </div>
                    </Link>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-green-600"
                    >
                        <ArrowLeft size={15} />
                        Back
                    </Link>

                </div>
            </header>


            {/* Content */}
            <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

                {/* Page Heading */}
                <div className="mb-10">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-600">
                        E-Code Solutions
                    </p>

                    <h1 className="mt-3 text-3xl font-black tracking-tight text-[#063b2d] sm:text-4xl">
                        Terms & Conditions
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                        Please read these Terms & Conditions carefully before
                        creating an account or using E-Code Solutions.
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                        Last updated: September 21, 2026
                    </p>

                </div>


                <div className="space-y-8">

                    {/* 1 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            1. About E-Code Solutions
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions is an e-waste management platform
                            designed to connect users, customers, and companies
                            for responsible handling of electronic waste.
                            The platform may support activities such as
                            listing electronic items, discovering services,
                            connecting with service providers, and managing
                            e-waste-related information.
                        </p>

                    </section>


                    {/* 2 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            2. Account Registration
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            To use certain features of E-Code Solutions,
                            you may need to create an account. You agree to
                            provide accurate and current information during
                            registration and to keep your account information
                            updated.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            You are responsible for maintaining the
                            confidentiality of your account credentials and
                            for activities performed through your account.
                        </p>

                    </section>


                    {/* 3 — Roles */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            3. Account Roles
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions provides different account roles.
                            Each role is intended for a different type of
                            platform activity.
                        </p>


                        {/* User */}
                        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">

                            <h3 className="font-black text-[#064e3b]">
                                3.1 User
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                A User can submit or list electronic items
                                through the platform for applicable
                                e-waste-related activities.
                            </p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-500">
                                <li>• List eligible electronic items.</li>
                                <li>• Provide accurate item information.</li>
                                <li>• Use the platform for legitimate purposes.</li>
                                <li>• Follow applicable e-waste handling requirements.</li>
                            </ul>

                        </div>


                        {/* Customer */}
                        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">

                            <h3 className="font-black text-[#064e3b]">
                                3.2 Customer
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                A Customer can use E-Code Solutions to discover
                                and interact with available e-waste-related
                                services.
                            </p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-500">
                                <li>• Search for available services.</li>
                                <li>• Review relevant service information.</li>
                                <li>• Contact or request services where available.</li>
                                <li>• Provide accurate information when requesting a service.</li>
                            </ul>

                        </div>


                        {/* Company */}
                        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">

                            <h3 className="font-black text-[#064e3b]">
                                3.3 Company
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                A Company represents an organization or
                                service provider that offers e-waste-related
                                services through E-Code Solutions.
                            </p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-500">
                                <li>• Provide accurate company information.</li>
                                <li>• Provide accurate agency information.</li>
                                <li>• Specify the services offered.</li>
                                <li>• Maintain accurate service information.</li>
                                <li>• Provide services responsibly and lawfully.</li>
                            </ul>

                        </div>

                    </section>


                    {/* 4 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            4. User Responsibilities
                        </h2>

                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                            <li>
                                • You must provide truthful and accurate
                                information.
                            </li>

                            <li>
                                • You must not use the platform for unlawful,
                                fraudulent, or misleading activities.
                            </li>

                            <li>
                                • You must not submit content that violates
                                another person's rights.
                            </li>

                            <li>
                                • You must not attempt to interfere with the
                                operation or security of the platform.
                            </li>

                            <li>
                                • You must use the platform only for its
                                intended purposes.
                            </li>
                        </ul>

                    </section>


                    {/* 5 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            5. Electronic Waste Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Users and companies are responsible for providing
                            accurate information about electronic items and
                            services. E-Code Solutions does not permit users
                            to intentionally provide false or misleading
                            information about an item, service, company, or
                            transaction.
                        </p>

                    </section>


                    {/* 6 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            6. Company & Service Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Companies are responsible for the accuracy of
                            their company name, agency name, services,
                            contact information, and other information they
                            provide through the platform.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            E-Code Solutions may take action on accounts or
                            information that violates these Terms or applicable
                            laws.
                        </p>

                    </section>


                    {/* 7 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            7. Prohibited Activities
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Users must not use E-Code Solutions to:
                        </p>

                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li>• Conduct fraudulent activities.</li>
                            <li>• Provide intentionally false information.</li>
                            <li>• Impersonate another person or organization.</li>
                            <li>• Upload malicious or harmful content.</li>
                            <li>• Attempt unauthorized access to another account.</li>
                            <li>• Abuse, disrupt, or damage the platform.</li>
                        </ul>

                    </section>


                    {/* 8 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            8. Account Suspension
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may restrict, suspend, or
                            terminate an account when there is a violation
                            of these Terms, misuse of the platform, security
                            concerns, or other circumstances permitted by
                            applicable law.
                        </p>

                    </section>


                    {/* 9 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            9. Platform Availability
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may update, modify, suspend, or
                            discontinue portions of the platform from time
                            to time. Availability may also be affected by
                            maintenance, technical problems, or circumstances
                            outside the platform's control.
                        </p>

                    </section>


                    {/* 10 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            10. Changes to These Terms
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may update these Terms &
                            Conditions when necessary. Updated terms will
                            become effective when published on the platform,
                            unless otherwise stated.
                        </p>

                    </section>


                    {/* 11 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            11. Contact
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            If you have questions regarding these Terms &
                            Conditions or the use of E-Code Solutions, please
                            contact the platform administration through the
                            available contact channels.
                        </p>

                    </section>

                </div>


                {/* Bottom */}
                <div className="mt-10 border-t border-slate-200 pt-6 text-center">

                    <p className="text-xs leading-6 text-slate-400">
                        By creating an account or using E-Code Solutions,
                        you acknowledge that you have read and understood
                        these Terms & Conditions.
                    </p>

                </div>

            </section>

        </main>
    );
}