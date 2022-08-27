import React from 'react';
import ItemCount from './ItemCount';
import {useState} from 'react';

const ItemListContainer = () => {

    const [stock, setStock] = useState(10)

    function onAdd(cont){
        console.log("se han confirmado", cont, "productos")
        setStock(stock - cont)

    }
    return (
        <div>
            <ItemCount stock={stock} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer
