// src/front/js/layout.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";  // Asegúrate de que esta ruta sea correcta
import { BackendURL } from "./components/backendURL";  // Este archivo debería existir
import { Home } from "./pages/home";  // Verifica que el archivo home.js exista
import { Demo } from "./pages/demo";  // Verifica que el archivo demo.js exista
import { Single } from "./pages/single";  // Verifica que el archivo single.js exista
import { Categories } from "./pages/Categories";  // Verifica que el archivo Categories.js exista
import injectContext from "./store/appContext";  // Verifica que appContext.js exista

import { Navbar } from "./components/navbar";  
import { Footer } from "./components/footer";  

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
                        <Route element={<Categories />} path="/categories" />  {/* Ruta para Categorías */}
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
