import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = ({ producto }) => {

    const [stock, setStock] = useState(producto.stock)

    return (
        <div key={producto.id}>
            <div className='cardcontainer'>
                <div className="card text-white bg-primary mb-3 btncont">
                    <div className="hoodie"></div>
                    <div>
                        <p>Stock: {stock} </p>
                    </div>
                    <ItemCount producto={producto} setStock={setStock} stock={stock}/>
                    <Link className='btn' to={`item/${producto.id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Item;


