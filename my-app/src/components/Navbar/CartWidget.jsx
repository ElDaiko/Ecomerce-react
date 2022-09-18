import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
    const { cart, totalQuantity } = useCart()
    return (
        cart.length > 0 ?
            <div className="carticon">
                <p className="nav-link"><FaCartPlus />{totalQuantity()}</p>
            </div>
            :
            <></>

    );
}

export default CartWidget;
