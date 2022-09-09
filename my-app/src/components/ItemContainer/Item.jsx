import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <div key={producto.id} className="card text-white bg-primary mb-3 btncont rowcard">
            <div>{producto.nombre}</div>
            <img className='dinamicimg' src={`/assets/images/${producto.img}`} alt='img'/>
            <div>
                <p>Stock: {producto.stock} </p>
            </div>
            <Link className='btn' to={`item/${producto.id}`}>
                Details
            </Link>
        </div>

    );

}

export default Item;


