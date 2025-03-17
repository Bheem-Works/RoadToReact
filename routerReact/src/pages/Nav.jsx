import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  // Reusable function for styling NavLinks
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    margin: '0 10px'
  });

  return (
    <nav className="navigation">
      <NavLink to="/home" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/blogs" style={navLinkStyles}>
        Blog
      </NavLink>
      <NavLink to="/contact" style={navLinkStyles}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Nav;