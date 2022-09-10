import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemContainer/ItemCount';
import { Link } from 'react-router-dom';
const ItemDetail = ({details}) => {

    const [stock, setStock] = useState(details.stock)
    const [save, setSave] = useState(false)

    const onSave = () =>{
        setSave(true);
    }
    
    return (
        <div className="card text-white btncont2" key={details.id}>
            <div className="card-header">{details.nombre}</div>
            <div className="card-body">
                <p className="card-text">Precio: ${details.precio}</p>
                <p className="card-text">Material: {details.material}</p>
                <p className="card-text">Stock: {stock}</p>
                {!save ?
                    <ItemCount producto={details} setStock={setStock} stock={stock} onSave={onSave}/>
                :   <div>
                        <Link to = "/cart">
                        <button className='btn'>Check in</button>
                        </Link>
                        <button className='btn' onClick={() => setSave(false)}>Continue buying</button>
                    </div>}

            </div>
        </div>
    );
}

export default ItemDetail;
