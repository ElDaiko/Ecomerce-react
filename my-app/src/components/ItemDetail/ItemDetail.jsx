import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemContainer/ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const ItemDetail = ({ details }) => {

    const [stock, setStock] = useState(details.stock)
    const [save, setSave] = useState(false)
    const { categoria, nombre, img, precio, id } = details
    const { addItem } = useCart()

    const onSave = (cont) => {
        let purchase = {
            id,
            nombre,
            precio,
            categoria,
            img,
            quantity: cont
        }
        setSave(true);
        addItem(purchase)

    }
    return (
        <div className='detailContainer'>
            <img src={details.img} alt='img'></img>
            <div className="fontShop2 btn2" key={details.id}>
                <p>{details.nombre}</p>
                <div>
                    <p>${details.precio}</p>
                    <p>Stock: {stock}</p>
                    <p>{details.material}</p>         
                </div> 
                {!save ?
                <div> <ItemCount producto={details} setStock={setStock} stock={stock} onSave={onSave} /></div>
                : <div>
                    <Link to="/cart">
                        <button className=''>Go to Cart</button>
                    </Link>
                    <button onClick={() => setSave(false)}>Continue buying</button>
            </div>}
            </div>
            
            
        </div>

    );
}

export default ItemDetail;
