import './App.css';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import About from './components/About';
import Images from './components/Images';
import Cart from './components/Cart';
import { toast } from 'react-toastify';

import Collection from './components/Collection.jsx';

function App() {
  const [filteredSaree, setFilteredSaree] = useState([]);
  const [cart, setCart] = useState([]);

  function getSaree(color) {
    const result = data.filter((item) => item.color === color);
    setFilteredSaree(result);
  }

  //add to cart function
  const addToCart = (saree) => {
    setCart((prevCart) => [...prevCart, saree]);
    console.log('cart updated:', cart);
    toast.success('Added to cart !');
  };
  const onRemove = (id) => {
    setCart((prevcart) => prevcart.filter((item) => item.id !== id));
    toast.error('Removed from cart !');
  };

  return (
    //central cart state

    <div className="app-container">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/history"
          element={<History />}
        />
        <Route
          path="/images"
          element={<Images />}
        />
        <Route
          path="/addtocart"
          element={
            <Cart
              sarees={cart}
              onRemove={onRemove}
            />
          }
        />
        {/* Dynamic path*/}
        <Route
          path="/:color/collection"
          element={<Collection addToCart={addToCart}></Collection>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
