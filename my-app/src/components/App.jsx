import React from 'react';
import Navbar from './navbar';
import Container from './container';

//conectar mi html con el react
function App() {
  return (
    <>
        <Navbar />
        <Container title="Mi eComerce" subtitle="Subtitulo"/>
    </>
  );
}

export default App;
