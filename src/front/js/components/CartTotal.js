import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const CartTotal = () => {
    const { store } = useContext(Context);

    const total = store.cart.reduce((acc, item) => acc + item.precio, 0);

    return (
        <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Proceder al Pago</button>
        </div>
    );
};
