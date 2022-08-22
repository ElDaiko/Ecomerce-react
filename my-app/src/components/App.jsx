import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

//conectar mi html con el react
function App() {
  return (
    <>
        <Navbar />
        <ItemListContainer title="Bendu clothing"/>
    </>
  );
}

export default App;
