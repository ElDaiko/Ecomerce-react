import { React } from 'react';
import UseCont from '../../hooks/useCont';
/* import { FaRedo, FaCheckCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; */

const ItemCount = ({ producto, setStock, stock, onSave }) => {

    const { add, sub, cont } = UseCont(stock)
    /* const {removeItem} = useCart() */
    
    function onAdd(cont) {
        if (stock >= 1 && cont <= stock) {
            console.log("se han confirmado", cont, "productos")
            setStock(stock - cont)
            
        }
        else{
            console.log("Valor menor a 1");
        }

    }

    /* function onReset() {
        console.log("se han resetado las adiciones")
        setStock(producto.stock)
    } */

    

    return (
        <div className='fontShop2'>
            <div className='addItem'>
                <button className='btn2 margin' onClick={sub}>-</button>
                <i className='inlineMargin'>{cont}</i>
                <button className='btn2 margin' onClick={add}>+</button>
            </div>
            <button className="btn2" onClick={() => {onAdd(cont);onSave(cont)}}>Add to cart</button>
            {/* <button className='btn' onClick={() => removeItem(producto.id)}><FaRedo /></button> */}
        </div>
    );

}


export default ItemCount;