import { React } from 'react';
import UseCont from '../hooks/useCont';
const ItemCount = ({ stock, onAdd, onReset }) => {

    const { add, sub, cont } = UseCont(stock)

    return (
        <div className='cardcontainer'>
            <div className="card text-white bg-primary mb-3 btncont">
            <div className="hoodie"></div>
            <div>
                <p>Stock: {stock} </p>

                <p>
                    Cart: {cont}
                </p>
                <button className='btn' onClick={add}>
                    +
                </button>
                <button className='btn' onClick={sub}>
                    -
                </button>
            </div>
            <button className='btn' onClick={() => onReset()}>Reset</button>
            <button className="btn" onClick={() => onAdd(cont)}>Confirm</button>
        </div>
        </div>
    );

}

export default ItemCount;