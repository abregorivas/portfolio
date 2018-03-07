import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../styles/components/_navbar.scss';
import logo from '../images/logo-sm.png';

const Navbar = () => (
  <div className="main-container">
    <span className="logo">
      <img src={logo} alt="logo" />
    </span>
    <ul>
      <li>About</li>
      <li>Works</li>
      <li>Contact</li>
    </ul>
  </div>
);

export default Navbar;
