import { React } from 'react';
import Shop from './HomePage/Bendushop';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemContainer/ItemListContainer';
import Footers from './Footer/Bendufooter';
import Tees from './HomePage/Bendutees';
import Home from './HomePage/Benduhome';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



//conectar mi html con el react


const Navhome = () => {
  return (
    <div className="body">
      <div className="body1">
        <div className="App">
      
          <Navbar/>
          <Home />
        </div>
      </div>
      <div className="container2">
        <Shop />
      </div>
      <Footers />
    </div>
  )
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="tees"
          element={
            <Tees />
          } />
        <Route path="/"
          element={
            <Navhome />
          } />
        <Route path="/category/:categoria"
          element={
            <ItemListContainer/>
          } />
         <Route path="/category/:categoria/item/:id"
          element={
            <ItemDetailContainer/>
          } />
      </Routes>
    </Router>
  );
}

export default App;