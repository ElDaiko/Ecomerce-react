import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
    function onAdd(cont){
        console.log("se han confirmado", cont, "productos")
    }
    return (
        <div>
            <ItemCount stock={10} onAdd={onAdd}/>
        </div>
    );
}

export default ItemListContainer
