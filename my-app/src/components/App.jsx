import {React} from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemFiles/ItemListContainer';
import ItemList from './ItemFiles/ItemList';

//conectar mi html con el react
function App() {

  return (
    <>
        <Navbar />
        <ItemListContainer/>
        <ItemList/>
    </>
  );
}

export default App;
 