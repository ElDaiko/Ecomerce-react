import {React} from 'react';
import UseCont from '../hooks/useCont';
const ItemCount = ({ stock, onAdd, onReset }) => {

    const {add, sub, cont} = UseCont(stock)

    return (

        <div>
            <div>
                <p>Stock: {stock} </p>
                <button className='btn' onClick={add}>
                    +
                </button>
                <p>
                    cantidad: {cont}
                </p>
                <button className='btn' onClick={sub}>
                    -
                </button>
                <button className='btn' onClick={() => onReset()}>Reset</button>
            </div>
            <div>
                <button className="btn" onClick={() => onAdd(cont)}>Confirmar</button>
            </div>
        </div>

    );

}

export default ItemCount;