import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemContainer/ItemCount';
const ItemDetail = ({details}) => {

    const [stock, setStock] = useState(details.stock)
    
    return (
        <div className="card text-white bg-primary mb-3 btncont2" key={details.id}>
            <div className="card-header">{details.nombre}</div>
            <div className="card-body">
                <p className="card-text">Precio: ${details.precio}</p>
                <p className="card-text">Material: {details.material}</p>
                <p className="card-text">Stock: {stock}</p>
                <ItemCount producto={details} setStock={setStock} stock={stock} />
            </div>
        </div>
    );
}

export default ItemDetail;
