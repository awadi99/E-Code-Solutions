import React, { lazy, Suspense ,useMemo} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./hook/useAuth.js";

import Loading from "./components/common/Loading";
import TOC from "./pages/TOC.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RoleRoute from "./layouts/RoleRoute.jsx";
// Lazy loaded pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Docs = lazy(() => import("./pages/Docs"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const MainLayout = lazy (()=> import('./layouts/MainLayout.jsx'));
const SalesOrder = lazy(()=>import("./pages/SalesOrder.jsx")); 
const  AddProducts =lazy(()=>import("./pages/AddProducts.jsx"));
const Products = lazy(()=>import("./pages/Products.jsx"));
const ProductDetailsInfo = lazy(()=>import("./components/products/ProductDetailsInfo.jsx"));
const InvoiceOrder = lazy(()=>import("./pages/InvoiceOrder.jsx"));
const Profile =lazy(()=>import("./pages/Profile.jsx"));
const  UserProduct =lazy(()=>import("./pages/UserProduct.jsx"));
const GoogleAuthSuccess = lazy(()=>import("./pages/GoogleAuthSuccess.jsx"));


export default function App() {

    const{isLoading}= useAuth();

    if (isLoading) {
        return (
            <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#f6faf5]">
                <div className="h-9 w-9 animate-spin rounded-full border-4 border-green-100 border-t-[#063b2d]" />
    
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#063b2d]">
                    E-Code Solutions
                </p>
            </div>
        );
    }
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
                <Route path="/" element={<LandingPage />}/>
                <Route path="/docs" element={<Docs />}/>

                {/* Authentication */}

                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path='/auth/google/success' element={<GoogleAuthSuccess />} />


                {/* main */}
                <Route path="/main" element={<MainLayout />}>

                    {/* User */}
                    <Route element={<RoleRoute allowedRoles={["User"]} />}>
                        <Route path="sales-order" element={<SalesOrder />} />
                        <Route path="addproduct" element={<UserProduct />} />
                        <Route path="addproduct/new" element={<AddProducts />} />
                    </Route>

                    {/* Company || Customer */}
                    <Route element={<RoleRoute allowedRoles={["Company", "Customer"]} />}>
                        <Route path="products" element={<Products />} />
                        <Route path="products/:productId" element={<ProductDetailsInfo />} />
                        <Route path="invoice-order" element={<InvoiceOrder />} />
                    </Route>

                    {/* Common */}

                    <Route path="profile" element={<Profile />} />

                </Route>

                {/* Common */}
                <Route path="/toc" element={<TOC />}/>
                <Route path="/pp" element={<PrivacyPolicy />} />

                {/* Unknown URL → Home */}
                <Route path="*" element={<Navigate to="/" replace />}/>

            </Routes>
        </Suspense>
    );
};