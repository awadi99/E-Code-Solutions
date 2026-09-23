import {
    User,
    LogOut,
    Package,
    PackagePlus,
    ShoppingCart,
    BadgeDollarSign,
    ReceiptText,
} from "lucide-react";

export const navItems = [
    {
        name: "Sales & Order",
        path: "/main/sales-order",
        icon: BadgeDollarSign,
        roles: ["User"],
    },
    {
        name: "Add Products",
        path: "/main/addproduct",
        icon: PackagePlus,
        roles: ["User"],
    },

    {
        name: "Products",
        path: "/main/products",
        icon: Package,
        roles: ["Company", "Customer"],
    },

    {
        name: "Invoice & Order",
        path: "/main/invoice-order",
        icon: ReceiptText,
        roles: ["Company", "Customer"],
    },

    {
        name: "Profile",
        path: "/main/profile",
        icon: User,
        roles: ["User", "Company", "Customer"],
    },

    {
        name: "Logout",
        path: "/main/Logout",
        icon: LogOut,
        danger: true,
        roles: ["User", "Company", "Customer"],
    },
];