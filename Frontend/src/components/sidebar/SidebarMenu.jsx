import React, { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";
import { useAuth } from "../../hook/useAuth";

const MenuItem = memo(({ item, expanded, onLogout }) => {
    const Icon = item.icon;

    const content = (isActive = false) => (
        <>
            <div className="flex items-center gap-3 z-10">
                <Icon
                    className={`h-[18px] w-[18px] shrink-0 transition-colors ${
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
                        rounded-full px-2 py-0.5
                        text-[10px] font-bold
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

    {/* Logout */}
    if (item.name === "Logout") {
        return (
            <button
                type="button"
                onClick={onLogout}
                className="
                    group flex w-full items-center justify-between
                    rounded-lg px-3 py-2
                    select-none
                    text-slate-500
                    transition-colors duration-200
                    hover:bg-red-50
                    hover:text-red-600
                "
            >
                {content(false)}
            </button>
        );
    }

    {/* Normal navigation item */}
    return (
        <NavLink
            to={item.path}
            end={item.path === "/main"}
            className={({ isActive }) => `
                group flex items-center justify-between
                rounded-lg px-3 py-2
                select-none
                transition-colors duration-200

                ${
                    item.danger
                        ? "text-slate-500 hover:bg-red-50 hover:text-red-600"
                        : isActive
                            ? "bg-[#f6faf5] font-semibold text-[#063b2d]"
                            : "text-slate-600 hover:bg-[#f6faf5] hover:text-green-700"
                }
            `}
        >
            {({ isActive }) => content(isActive)}
        </NavLink>
    );
});

MenuItem.displayName = "MenuItem";

export default function SidebarMenu({ expanded }) {
    const { user, logout } = useAuth();

    const filteredNavItems = useMemo(() => {
        if (!user?.role) {
            return [];
        }

        return navItems.filter((item) =>
            item.roles?.includes(user.role)
        );
    }, [user?.role]);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <nav className="mt-4 flex flex-col gap-1 p-3">
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