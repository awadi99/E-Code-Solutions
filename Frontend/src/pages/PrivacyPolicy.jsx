import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Recycle } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#f6faf5] text-slate-900">

            {/* ================= HEADER ================= */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#064e3b] text-green-300">
                            <Recycle size={19} />
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
                        to="/register"
                        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-green-600"
                    >
                        <ArrowLeft size={15} />
                        Back
                    </Link>

                </div>
            </header>


            {/* ================= CONTENT ================= */}
            <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

                {/* Heading */}
                <div className="mb-10">

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-green-600">
                        E-Code Solutions
                    </p>

                    <h1 className="mt-3 text-3xl font-black tracking-tight text-[#063b2d] sm:text-4xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                        This Privacy Policy explains how E-Code Solutions
                        collects, uses, protects, and handles information when
                        you use our platform.
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                        Last updated: September 21, 2026
                    </p>

                </div>


                <div className="space-y-8">

                    {/* 1 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            1. Introduction
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions is an e-waste management platform
                            designed to connect users, customers, and companies
                            for activities related to responsible electronic
                            waste management.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            This Privacy Policy describes the types of
                            information that may be collected through the
                            platform and how that information may be used.
                        </p>

                    </section>


                    {/* 2 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            2. Information We Collect
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Depending on how you use E-Code Solutions, we may
                            collect information that you provide directly to
                            us.
                        </p>


                        <h3 className="mt-6 font-black text-[#064e3b]">
                            Account Information
                        </h3>

                        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                            <li>• Full name</li>
                            <li>• Email address</li>
                            <li>• Account role</li>
                            <li>• Account authentication information</li>
                        </ul>


                        <h3 className="mt-6 font-black text-[#064e3b]">
                            Company Information
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            If you register as a Company, we may collect
                            information such as your company name, agency name,
                            services offered, and other information you choose
                            to provide.
                        </p>


                        <h3 className="mt-6 font-black text-[#064e3b]">
                            Service Information
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Customers and Companies may provide information
                            relating to services they are searching for,
                            offering, or requesting through the platform.
                        </p>


                        <h3 className="mt-6 font-black text-[#064e3b]">
                            Electronic Item Information
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Users may provide information about electronic
                            items submitted or listed through E-Code
                            Solutions, including information necessary to
                            identify or describe the item.
                        </p>

                    </section>


                    {/* 3 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            3. Information Collected Automatically
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            When you access the platform, certain technical
                            information may be collected automatically to
                            operate, secure, maintain, and improve the service.
                        </p>

                        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                            <li>• IP address</li>
                            <li>• Browser type</li>
                            <li>• Device information</li>
                            <li>• Operating system information</li>
                            <li>• Pages or features accessed</li>
                            <li>• Basic usage and diagnostic information</li>
                        </ul>

                    </section>


                    {/* 4 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            4. How We Use Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Information collected through E-Code Solutions may
                            be used to:
                        </p>

                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                            <li>• Create and manage user accounts.</li>
                            <li>• Authenticate users and maintain account security.</li>
                            <li>• Provide platform features and services.</li>
                            <li>• Connect users with relevant services or companies.</li>
                            <li>• Display information submitted by users or companies where required for platform functionality.</li>
                            <li>• Process and respond to requests.</li>
                            <li>• Maintain and improve the platform.</li>
                            <li>• Detect and prevent unauthorized or abusive activity.</li>
                            <li>• Communicate with users about their accounts or platform services.</li>
                            <li>• Comply with applicable legal obligations.</li>
                        </ul>

                    </section>


                    {/* 5 — ROLES */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            5. Information and Account Roles
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions supports different account roles.
                            The information associated with your account may
                            depend on the role you select.
                        </p>


                        {/* User */}
                        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">

                            <h3 className="font-black text-[#064e3b]">
                                User
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Users may provide account information and
                                electronic item information when listing or
                                submitting electronics through the platform.
                            </p>

                        </div>


                        {/* Customer */}
                        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">

                            <h3 className="font-black text-[#064e3b]">
                                Customer
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Customers may provide account information and
                                service-related information when searching for
                                or requesting available services.
                            </p>

                        </div>


                        {/* Company */}
                        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">

                            <h3 className="font-black text-[#064e3b]">
                                Company
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Companies may provide business information,
                                agency information, service information, and
                                other information necessary to present their
                                services on the platform.
                            </p>

                        </div>

                    </section>


                    {/* 6 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            6. Google Authentication
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may provide Google authentication
                            as a method of creating or accessing an account.
                            When you use Google authentication, information
                            provided by Google may be used to establish and
                            authenticate your E-Code Solutions account.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            The information received through Google
                            authentication will be handled according to this
                            Privacy Policy and the applicable policies of the
                            authentication provider.
                        </p>

                    </section>


                    {/* 7 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            7. Cookies and Authentication
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may use cookies or similar
                            technologies that are necessary for authentication,
                            account security, session management, and platform
                            functionality.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Authentication cookies may be used to keep you
                            securely signed in and to recognize your active
                            session.
                        </p>

                    </section>


                    {/* 8 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            8. How We Share Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions does not intend to sell personal
                            information as part of the normal operation of the
                            platform.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Information may be shared when necessary to provide
                            platform functionality, operate technical
                            services, protect the platform, comply with legal
                            requirements, or when you request or authorize
                            such sharing.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            For example, information submitted by a Company may
                            be displayed to Customers when necessary to provide
                            the relevant service functionality.
                        </p>

                    </section>


                    {/* 9 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            9. Data Security
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions takes reasonable measures to
                            protect information against unauthorized access,
                            alteration, disclosure, or destruction.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            However, no internet-based service or electronic
                            storage system can guarantee absolute security.
                        </p>

                    </section>


                    {/* 10 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            10. Data Retention
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            We may retain information for as long as reasonably
                            necessary to provide the platform, maintain
                            accounts, comply with legal obligations, resolve
                            disputes, enforce agreements, and protect the
                            platform.
                        </p>

                    </section>


                    {/* 11 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            11. Your Information
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            Depending on applicable law and the functionality
                            provided by E-Code Solutions, you may have rights
                            relating to your personal information, including
                            rights to access, update, correct, or request
                            deletion of certain information.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Requests may be subject to verification and legal
                            or operational requirements.
                        </p>

                    </section>


                    {/* 12 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            12. Children's Privacy
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions is not intended to knowingly
                            collect personal information from children where
                            such collection is restricted by applicable law.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            If you believe that a child has provided personal
                            information through the platform in circumstances
                            where it should not have been collected, please
                            contact the platform administration.
                        </p>

                    </section>


                    {/* 13 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            13. Third-Party Services
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may use third-party services for
                            authentication, hosting, analytics, communication,
                            infrastructure, or other technical purposes.
                        </p>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Third-party services may process information
                            according to their own privacy policies and terms.
                        </p>

                    </section>


                    {/* 14 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            14. Changes to This Privacy Policy
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            E-Code Solutions may update this Privacy Policy from
                            time to time. Changes will be published on this
                            page with an updated effective or revision date
                            where appropriate.
                        </p>

                    </section>


                    {/* 15 */}
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                        <h2 className="text-lg font-black text-[#063b2d]">
                            15. Contact Us
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                            If you have questions, concerns, or requests
                            regarding this Privacy Policy or your personal
                            information, please contact E-Code Solutions
                            through the official contact information provided
                            on the platform.
                        </p>

                        {/* Replace these with your actual details */}
                        <div className="mt-5 rounded-xl bg-green-50 p-5">
                            <p className="text-sm font-bold text-[#064e3b]">
                                E-Code Solutions
                            </p>

                            <p className="mt-2 text-sm text-slate-600">
                                Email: your-adityawaghmare9990@gmail.com
                            </p>

                            <p className="mt-1 text-sm text-slate-600">
                                Website: E-Code Solutions
                            </p>
                        </div>

                    </section>

                </div>


                {/* Footer Note */}
                <div className="mt-10 border-t border-slate-200 pt-6 text-center">

                    <p className="text-xs leading-6 text-slate-400">
                        By using E-Code Solutions, you acknowledge that you
                        have read and understood this Privacy Policy.
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs">

                        <Link
                            to="/toc"
                            className="font-semibold text-[#064e3b] transition hover:text-green-600"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            to="/"
                            className="font-semibold text-slate-500 transition hover:text-green-600"
                        >
                            Home
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}