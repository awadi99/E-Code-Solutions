import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from "./components/common/Loading";
import TOC from "./pages/TOC.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import SalesOrder from "./pages/SalesOrder.jsx";
import AddProducts from "./pages/AddProducts.jsx";
import Products from "./pages/Products.jsx";
import ProductDetailsInfo from "./components/products/ProductDetailsInfo.jsx";
import InvoiceOrder from "./pages/InvoiceOrder.jsx";
import Profile from "./pages/Profile.jsx"
import UserProduct from "./pages/UserProduct.jsx";
UserProduct
// Lazy loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Docs = lazy(() => import("./pages/Docs"));
const MainLayout = lazy (()=> import('./layouts/MainLayout.jsx'));


export default function App() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen flex-col items-center justify-center bg-black">
                    <Loading />
                </div>
            }
        >
            <ToastContainer position="top-center" autoClose={3000} theme="dark" transition={Flip} />
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
                <Route path="/main" element={<MainLayout />}>
                    {/* <Route index element={<SalesOrder />} /> */}
                    <Route path="sales-order" element={<SalesOrder/>}/>
                    < Route path="userproduct" element={<UserProduct/>}/>
                    <Route path="addproduct" element={<UserProduct/>}/>
                    <Route path="addproduct/new" element={<AddProducts />} />


            
                
                    <Route path="products" element={<Products />} />
                    <Route path="products/:productId" element={<ProductDetailsInfo />} />
                    <Route path="invoice-order" element={<InvoiceOrder />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route
                    path="/toc"
                    element={<TOC />}
                />

                <Route
                    path="/pp"
                    element={<PrivacyPolicy />}
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