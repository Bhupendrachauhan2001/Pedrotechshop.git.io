import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar'
import { Cart } from './Pages/cart/Cart';
import { Shop } from './Pages/shop/Shop';
import { ShopContextProvider } from './Context/shop-contex';

function App() {
  return (
    <ShopContextProvider>
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop/>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
    </ShopContextProvider>
  );
}

export default App;
