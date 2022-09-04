import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({details}) => {
    return (
        <div className="card text-white bg-primary mb-3 btncont2" key={details.id}>
            <div className="card-header">{details.nombre}</div>
            <div className="card-body">
                <p className="card-text">Precio: ${details.precio}</p>
                <p className="card-text">Material: {details.material}</p>
                <p className="card-text">Stock: {details.stock}</p> 
            </div>
            <Link  className='btn' to = {`ItemDetail/${details.id}`}>
                    Details
            </Link> 
        </div>
    );
}

export default ItemDetail;
