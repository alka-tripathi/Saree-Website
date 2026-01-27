import './App.css';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import About from './components/About';
import Images from './components/Images';
import Cart from './components/Cart';

import Collection from './components/Collection.jsx';

function App() {
  const [filteredSaree, setFilteredSaree] = useState([]);

  function getSaree(color) {
    const result = data.filter((item) => item.color === color);
    setFilteredSaree(result);
  }

  return (
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
          element={<Cart />}
        />
        {/* Dynamic path*/}
        <Route
          path="/:color/collection"
          element={<Collection></Collection>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
