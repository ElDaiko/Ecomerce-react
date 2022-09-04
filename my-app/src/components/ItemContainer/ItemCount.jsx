import { React } from 'react';
import UseCont from '../../hooks/useCont';
import { FaRedo, FaCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom"

const ItemCount = ({ stock, onAdd, onReset }) => {

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
                <Link className='btn' to = '/itemDetail'>
                    Details
                </Link>
            </div>
        </div>
    );

}

export default ItemCount;