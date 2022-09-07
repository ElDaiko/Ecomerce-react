import { React } from 'react';
import UseCont from '../../hooks/useCont';
import { FaRedo, FaCheckCircle } from 'react-icons/fa';

const ItemCount = ({ producto, setStock, stock }) => {

    
    function onAdd(cont) {
        if (stock > 0 && cont <= stock) {
            console.log("se han confirmado", cont, "productos")
            setStock(stock - cont)
        }

    }

    function onReset() {
        console.log("se han resetado las adiciones")
        setStock(producto.stock)
    }

    const { add, sub, cont } = UseCont(stock)

    return (
        <div>
            <div>
                <button className='btn margin' onClick={sub}>-</button>
                {cont}
                <button className='btn margin' onClick={add}>+</button>
            </div>
            <button className="btn" onClick={() => onAdd(cont)}><FaCheckCircle /></button>
            <button className='btn' onClick={() => onReset()}><FaRedo /></button>
        </div>
    );

}

export default ItemCount;