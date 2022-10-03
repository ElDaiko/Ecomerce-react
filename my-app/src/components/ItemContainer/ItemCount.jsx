import { React } from 'react';
import UseCont from '../../hooks/useCont';
const ItemCount = ({setStock, stock, onSave }) => {

    const { add, sub, cont } = UseCont(stock)
    
    function onAdd(cont) {
        if (stock >= 1 && cont <= stock) {
            setStock(stock - cont)
            
        }
        else{
            console.error();
        }

    }

    return (
        <div className='fontShop2'>
            <div className='addItem'>
                <button className='btn2 margin' onClick={sub}>-</button>
                <i className='inlineMargin'>{cont}</i>
                <button className='btn2 margin' onClick={add}>+</button>
            </div>
            <button className="btn2" onClick={() => {onAdd(cont);onSave(cont)}}>Add to cart</button>
        </div>
    );

}


export default ItemCount;