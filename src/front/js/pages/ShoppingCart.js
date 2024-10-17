import React, { useContext } from 'react';
import { CartItem } from '../components/CartItem';
import { CartTotal } from '../components/CartTotal';
import { Context } from "../store/appContext";
import "../../styles/shoppingCart.css"; // Asegúrate de crear este archivo

export const ShoppingCart = () => {
    const { store } = useContext(Context); // Obtener el estado global donde está el carrito

    return (
        <div className="shopping-cart">
            <h2>Tu Carrito de Compras</h2>

            <div className="cart-items">
                {store.cart.length > 0 ? (
                    store.cart.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))
                ) : (
                    <p>Tu carrito está vacío</p>
                )}
            </div>

            {store.cart.length > 0 && <CartTotal />}
        </div>
    );
};
