import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Real Estate Platform</Link>
      </div>
      <div className="navbar-links">
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/add-property">Add Property</Link>

      </div>
    </nav>
  );
};

export default Navbar; 