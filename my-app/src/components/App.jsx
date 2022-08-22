import React from 'react';
import Navbar from './Navbar';
import Container from './Container';

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
