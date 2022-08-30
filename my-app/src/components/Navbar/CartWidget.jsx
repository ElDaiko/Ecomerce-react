import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <li className="carticon">
            <a className="nav-link" href="google.com"><FaCartPlus/></a>
        </li>
    );
}

export default CartWidget;
