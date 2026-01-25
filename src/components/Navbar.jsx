import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">Sakita</div>

      {/* Right: Nav items + search */}
      <div className="nav-right">
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
            <NavLink to="/images">Images</NavLink>
          </li>
          <li>
            <NavLink to="/addtocart">Cart</NavLink>
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
