import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

//conectar mi html con el react
function App() {

  function saludar() {
    console.log("Hola")
  }
  return (
    <>
        <Navbar />
        <ItemListContainer title="Bendu clothing"/>
        <p>
          
        </p>
        <button onClick={saludar}>
          Diste click
        </button>
        <button>

        </button>
    </>
  );
}

export default App;
