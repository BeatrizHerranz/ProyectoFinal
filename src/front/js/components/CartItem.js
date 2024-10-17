import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const CartItem = ({ item }) => {
    const { actions } = useContext(Context);

    return (
        <div className="cart-item">
            <img src={item.imagen} alt={item.nombre} />
            <div className="item-details">
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
            </div>
            <button onClick={() => actions.removeFromCart(item.id)}>Eliminar</button>
        </div>
    );
};
