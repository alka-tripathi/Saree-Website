import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import About from './components/About';
import Images from './components/Images';
import Cart from './components/Cart';

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
