import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBagShopping } from 'react-icons/fa6';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Satika</div>

      {/* Hamburger (Mobile only) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Right Section */}
      <div className={`nav-right ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
          <li>
            <NavLink to="/images">Textures</NavLink>
          </li>
          <li>
            <NavLink to="/addtocart">
              Cart <FaBagShopping />
            </NavLink>
          </li>
        </ul>

        <form
          className="search-bar"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search sarees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
