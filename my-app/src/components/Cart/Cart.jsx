import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useCart } from '../context/CartContext';

const Cart = () => {
    /* const{cart} = useContext(CartContext) */
    const {cart} =useCart()
    console.log('carrito', cart);   
    return (
        <div>
            <Navbar/>
            <h2 className="shopcard btn">
            This is the Cart section
            </h2>
        </div>
    );
}

export default Cart;
