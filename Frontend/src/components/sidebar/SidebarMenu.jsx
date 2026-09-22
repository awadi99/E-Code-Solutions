import React, { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";
import { useAuth } from "../../hook/useAuth";

const MenuItem = memo(({ item, expanded, onLogout }) => {
    const Icon = item.icon;

    const content = (isActive) => (
        <>
            <div className="flex items-center gap-3 z-10">
                <Icon
                    className={`w-[18px] h-[18px] shrink-0 transition-colors ${
                        isActive
                            ? "text-green-700"
                            : "text-slate-400"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                />

                {expanded && (
                    <span className="text-[13.5px] font-medium tracking-normal">
                        {item.name}
                    </span>
                )}
            </div>

            {(item.badge || item.badges) && expanded && (
                <div
                    className={`
                        text-[10px] font-bold px-2 py-0.5 rounded-full
                        transition-colors
                        ${
                            isActive
                                ? "bg-[#063b2d] text-white"
                                : "bg-green-50 text-[#063b2d]"
                        }
                    `}
                >
                    {item.badge || item.badges}
                </div>
            )}
        </>
    );

    if (item.name === "Logout") {
        return (
            <button
                onClick={onLogout}
                className="
                    w-full flex items-center justify-between
                    px-3 py-2 rounded-lg
                    group select-none
                    transition-colors duration-200
                    text-slate-500
                    hover:bg-red-50
                    hover:text-red-600
                "
            >
                {content(false)}
            </button>
        );
    }

    return (
        <NavLink
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) => `
                flex items-center justify-between
                px-3 py-2 rounded-lg
                group select-none
                transition-colors duration-200

                ${
                    item.danger
                        ? "text-slate-500 hover:bg-red-50 hover:text-red-600"
                        : isActive
                            ? "text-[#063b2d] bg-[#f6faf5] font-semibold"
                            : "text-slate-600 hover:bg-[#f6faf5] hover:text-green-700"
                }
            `}
        >
            {({ isActive }) => content(isActive)}
        </NavLink>
    );
});

MenuItem.displayName = "MenuItem";

// export default function SidebarMenu({ expanded }) {
//     const { user, logout } = useAuth();

//     const filteredNavItems = useMemo(() => {
//         if (!user) return [];

//         return navItems.filter((item) =>
//             item.roles?.includes(user?.role)
//         );
//     }, [user?.role]);

//     const handleLogout = async () => {
//         await logout();
//     };

//     return (
//         <nav className="flex flex-col p-3 gap-1 mt-4">
//             {filteredNavItems.map((item) => (
//                 <MenuItem
//                     key={item.name}
//                     item={item}
//                     expanded={expanded}
//                     onLogout={handleLogout}
//                 />
//             ))}
//         </nav>
//     );
// }

export default function SidebarMenu({ expanded }) {
    const { logout } = useAuth();

    // Temporary: show all menu items
    const filteredNavItems = navItems;

    const handleLogout = async () => {
        await logout();
    };

    return (
        <nav className="flex flex-col p-3 gap-1 mt-4">
            {filteredNavItems.map((item) => (
                <MenuItem
                    key={item.name}
                    item={item}
                    expanded={expanded}
                    onLogout={handleLogout}
                />
            ))}
        </nav>
    );
}