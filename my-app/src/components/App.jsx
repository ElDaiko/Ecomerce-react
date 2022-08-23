import {React, useState} from 'react';
import Navbar from './Nasvbar';
import ItemListContainer from './ItemListContainer';

//conectar mi html con el react
function App() {

  const[cont, setCont] = useState(0);

  function saludar() {
    console.log("Hola")
  }
  return (
    <>
        <Navbar />
        <ItemListContainer title="Bendu clothing"/>
        <p>
          Contador: {cont}
        </p>
        <button className='btn btn-secondary' onClick={() => setCont(cont + 1)}>
          +
        </button>
        <button className='btn btn-primary' onClick={() => setCont(cont - 1)}>
          -
        </button>
    </>
  );
}

export default App;
 