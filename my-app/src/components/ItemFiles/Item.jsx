 import React from 'react';

const Item = ({ producto }) => {
    return (
        <div className="card text-white bg-primary mb-3 btncont2" key={producto.id}>
            <div className="card-header">{producto.nombre}</div>
            <div className="card-body">
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">Material: {producto.material}</p>
                <p className="card-text">Stock: {producto.stock}</p>
            </div>
        </div>
    );
}

export default Item;
