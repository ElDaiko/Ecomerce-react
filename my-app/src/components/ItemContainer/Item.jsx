import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <Link key={producto.id} className="shopcard btncont btn" to={`item/${producto.id}`}>
            <img className='dinamicimg' src={producto.img} alt='img'/>         
            <div className='fontShop'>{producto.nombre}</div>
            <div className='fontShop'>{producto.precio}</div>
        </Link>

    );

}

export default Item;


