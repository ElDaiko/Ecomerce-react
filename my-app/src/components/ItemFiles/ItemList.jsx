import { React} from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return (
        <div className='cardcontainer2'>         
            {productos.map((item) => (<Item key={item.id} producto={item} />))}     
        </div>
    );
}


export default ItemList;
