import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ producto }) => {

    return (
            <div key={producto.id}>
                <ItemCount producto={producto}/>
            </div>
    );

}

export default Item;
