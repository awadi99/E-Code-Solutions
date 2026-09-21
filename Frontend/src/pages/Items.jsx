import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/slice";
import Footer from "../components/common/Footer.jsx";

import ItemsHero from "../components/Items/ItemsHero";
import ProductGrid from "../components/Items/ProductGrid";
import ProductEmpty from "../components/Items/ProductEmpty";
import ProductLoading from "../components/Items/ProductLoading";

const API_URL = "http://localhost:3000";

export function Items() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const [sellers, setSellers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userResponse = await fetch(
                    `${API_URL}/api/auth/me`,
                    {
                        credentials: "include",
                    }
                );

                if (!userResponse.ok) {
                    navigate("/sign-in");
                    return;
                }

                const loggedUser = await userResponse.json();

                if (loggedUser.role === "User") {
                    navigate("/");
                    return;
                }

                setUser(loggedUser);

                const productResponse = await fetch(
                    `${API_URL}/api/items`,
                    {
                        credentials: "include",
                    }
                );

                if (!productResponse.ok) {
                    throw new Error("Failed to fetch products");
                }

                const productData = await productResponse.json();

                setProducts(productData);

                const sellerEntries = await Promise.all(
                    productData
                        .filter((product) => product.createdBy)
                        .map(async (product) => {
                            try {
                                const sellerResponse = await fetch(
                                    `${API_URL}/api/user/${product.createdBy}`,
                                    {
                                        credentials: "include",
                                    }
                                );

                                if (!sellerResponse.ok) {
                                    return null;
                                }

                                const sellerData =
                                    await sellerResponse.json();

                                return [
                                    product.createdBy,
                                    sellerData,
                                ];
                            } catch (error) {
                                console.error(
                                    "Seller fetch error:",
                                    error
                                );

                                return null;
                            }
                        })
                );

                setSellers(
                    Object.fromEntries(
                        sellerEntries.filter(Boolean)
                    )
                );
            } catch (error) {
                console.error(
                    "Error loading products:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [navigate]);

    const handleAddToCart = (product) => {
        if (!user?._id) {
            navigate("/sign-in");
            return;
        }

        const allCarts =
            JSON.parse(localStorage.getItem("allCarts")) || {};

        const userCart = allCarts[user._id] || [];

        const alreadyAdded = userCart.some(
            (item) => item._id === product._id
        );

        if (alreadyAdded) {
            alert("Product already in cart");
            return;
        }

        userCart.push(product);

        allCarts[user._id] = userCart;

        localStorage.setItem(
            "allCarts",
            JSON.stringify(allCarts)
        );

        dispatch(addItem(1));

        alert("Product added to cart!");
    };

    if (loading) {
        return <ProductLoading />;
    }

    if (!user) {
        return null;
    }

    return (
        <>
            <ItemsHero />

            <section className="bg-white px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    {products.length > 0 ? (
                        <ProductGrid
                            products={products}
                            sellers={sellers}
                            onAddToCart={handleAddToCart}
                        />
                    ) : (
                        <ProductEmpty />
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Items;