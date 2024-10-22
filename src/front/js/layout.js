import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { BackendURL } from "./components/backendURL";
import { Home } from "./pages/home"; 
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Categories } from "./pages/Categories"; 
import ProductDetailPage from "./pages/ProductDetailPage";
import { ShoppingCart } from "./pages/ShoppingCart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import injectContext from "./store/appContext";

import { Navbar } from "./components/navbar";
import Footer from "./components/footer"; // Importación por defecto

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Categories />} path="/categories" />
                        <Route element={<ProductDetailPage />} path="/product/:id" />
                        <Route element={<ShoppingCart />} path="/cart" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);