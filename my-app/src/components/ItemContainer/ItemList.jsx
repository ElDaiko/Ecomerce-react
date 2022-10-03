import { React} from 'react';
import Item from './Item';

const itemList = ({productos}) => {
    return (
        <div className='cardcontainer2'>         
            {productos.map((item) => (<Item key={item.id} producto={item} />))}   
        </div>
    );
}


export default itemList;
