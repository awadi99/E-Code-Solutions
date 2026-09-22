import { Outlet } from "react-router-dom";
import Sidebar from "../pages/SideBarPage";

export default function MainLayout() {
    return (
        <div
            className="
                flex min-h-screen
                overflow-x-hidden
                bg-[#f6faf5]
                text-slate-800
                selection:bg-green-100
                selection:text-[#063b2d]
            "
        >
            <Sidebar />

            <div
                className="
                    flex min-w-0
                    flex-1 flex-col
                    md:ml-64
                    transition-[margin] duration-300 ease-in-out
                "
            >
                {/* Header */}
                <header
                    className="
                        fixed left-0 right-0 top-0
                        z-40
                        h-14
                        bg-[#f6faf5]/90
                        backdrop-blur-xl
                        backdrop-saturate-150
                        md:left-64
                    "
                >
                    <div
                        className="
                            absolute bottom-0 left-0
                            h-px w-full
                            bg-gradient-to-r
                            from-transparent
                            via-green-200/40
                            to-transparent
                        "
                    />
                </header>

                {/* Main Content */}
                <main
                    className="
                        relative
                        mt-14
                        min-h-screen
                        w-full
                        p-4
                        sm:p-6
                        lg:p-10
                    "
                >
                    {/* Subtle background decoration */}
                    <div
                        className="
                            pointer-events-none
                            absolute inset-0
                            overflow-hidden
                            select-none
                        "
                    >
                        <div
                            className="
                                absolute left-0 top-0
                                h-[40%] w-[40%]
                                rounded-full
                                bg-green-600/[0.02]
                                blur-[120px]
                            "
                        />
                    </div>

                    <div
                        className="
                            relative z-10
                            mx-auto
                            w-full
                            max-w-7xl
                        "
                    >
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}