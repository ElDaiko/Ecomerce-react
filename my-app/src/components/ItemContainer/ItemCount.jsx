import { React } from 'react';
import UseCont from '../../hooks/useCont';
import { FaRedo, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({producto}) => {


    const [stock, setStock] = useState(producto.stock)

    function onAdd(cont) {
        if (stock > 0 && cont <= stock) {
            console.log("se han confirmado", cont, "productos")
            setStock(stock - cont)
        }

    }

    function onReset() {
        console.log("se han resetado las adiciones")
        setStock(10)
    }

    const { add, sub, cont } = UseCont(stock)

    return (
        <div className='cardcontainer'>

            <div className="card text-white bg-primary mb-3 btncont">
                <button className='btn' onClick={() => onReset()}><FaRedo /></button>
                <div className="hoodie"></div>
                <div>
                    <p>Stock: {stock} </p>
                    <button className='btn margin' onClick={sub}>-</button>
                    {cont}
                    <button className='btn margin' onClick={add}>+</button>
                </div>
                <button className="btn" onClick={() => onAdd(cont)}><FaCheckCircle /></button>
                <Link className='btn' to={`item/${producto.id}`}>
                    Details
                </Link>
            </div>
        </div>
    );

}

export default ItemCount;