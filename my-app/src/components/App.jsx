import { React } from 'react';
import Shop from './HomePage/Bendushop';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemContainer/ItemListContainer';
import Footers from './Footer/Bendufooter';
import Home from './HomePage/Benduhome';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import Cart from './Cart/Cart';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



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
         <Route path="/cart"
          element={
            <Cart/>
          } /> 
      </Routes>
    </Router>
  );
}

export default App;