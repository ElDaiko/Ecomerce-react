import {React} from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import Item from './Item';

//conectar mi html con el react
function App() {

  return (
    <>
        <Navbar />
        <ItemListContainer/>
        <Item/>
    </>
  );
}

export default App;
 