import React from 'react';

const ItemDetail = ({details}) => {
    const {nombre, material, precio, stock} = details
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>{material}</h2>
            <h2>{precio}</h2>
            <h2>{stock}</h2>
        </div>
    );
}

export default ItemDetail;
