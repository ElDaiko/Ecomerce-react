import React from 'react';
import ItemCount from './ItemCount';
import {useState} from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [stock, setStock] = useState(10)

    function onAdd(cont){
        if(stock > 0 && cont <= stock){
            console.log("se han confirmado", cont, "productos")
            setStock(stock - cont)
        }

    }

    function onReset(){
        console.log("se han resetado las adiciones")
        setStock(10)
    }
    

    return (
        <div>
            <ItemCount stock={stock} onAdd={onAdd} onReset={onReset}/>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer
