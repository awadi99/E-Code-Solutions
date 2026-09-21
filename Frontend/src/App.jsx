import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "./components/common/Loading";
import TOC from "./pages/TOC.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

// Lazy loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Docs = lazy(() => import("./pages/Docs"));
const Items = lazy(() => import("./pages/Items"));
// const AddProducts = lazy(() => import("./pages/AddProducts"));
// const Store = lazy(() => import("./pages/Store"));
// const Invoice = lazy(() => import("./pages/Invoice"));

export default function App() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen flex-col items-center justify-center bg-black">
                    <Loading />
                </div>
            }
        >
            <Routes>

                {/* Landing Page */}
                <Route
                    path="/"
                    element={<LandingPage />}
                />

                {/* Authentication */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* User */}


                {/* Information */}
                <Route
                    path="/docs"
                    element={<Docs />}
                />

                {/* Products */}
                {/* <Route
                    path="/items"
                    element={<Items />}
                /> */}

                {/* <Route
                    path="/addproducts"
                    element={<AddProducts />}
                /> */}

                {/* Store */}
                {/* <Route
                    path="/store"
                    element={<Store />}
                /> */}

                {/* Invoice */}
                {/* <Route
                    path="/invoice"
                    element={<Invoice />}
                /> */}

                <Route
                path="/toc"
                element={<TOC/>}
                />

                <Route
                path ="/pp"
                element={<PrivacyPolicy/>}
                />


                {/* Unknown URL → Home */}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </Suspense>
    );
}