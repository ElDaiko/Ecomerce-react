 import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <div className="card text-white bg-primary mb-3 btncont2" key={producto.id}>
        <div className="card-header">{producto.nombre}</div>
        <div className="card-body">
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">Material: {producto.material}</p>
            <p className="card-text">Stock: {producto.stock}</p> 
        </div>
        <Link  className='btn' to = {`ItemDetail/${producto.id}`}>
                Details
        </Link> 
    </div>
    );

}

export default Item;
