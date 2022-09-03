import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to={"/itemList"}>
            <div className="carticon">
                <p className="nav-link"><FaCartPlus /></p>
            </div>
        </Link>

    );
}

export default CartWidget;
