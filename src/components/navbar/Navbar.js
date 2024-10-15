import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../assets/images/bhagavathi.jpeg'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className='title'><img src={logo} style={{height: "70px"}}/></Link>

      <div 
        className={`menu ${menuOpen ? 'open' : ''}`} // Add 'open' class for animation
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
        </li>
        <li>
          <NavLink to="/factories" onClick={handleLinkClick}>Factories</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
