import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <div className='logo-wrapper'>
            <img src='./assets/logo_reizoko.svg' className='nav-logo' />
            <h2>REIZOKONNECT</h2>
          </div>
        </Link>
      </div>
      <div className='nav-links'>
        <ul>
          <Link to='/products'>
            <li>Nos produits</li>
          </Link>
          <Link to='/sandbox'>
            <li>Bac à sable</li>
          </Link>
          <Link to='/brand'>
            <li>La marque</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
