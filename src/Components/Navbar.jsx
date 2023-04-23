import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ responsive, setResponsive }) => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <div className='logo-wrapper'>
            <img src='./assets/logo_reizoko.png' className='nav-logo' />
            <h2>REIZOKONNECT</h2>
          </div>
        </Link>
      </div>
      <div className='menu'>
        <img
          className={`${responsive ? "menu-img" : "close-img"}`}
          src={`./assets/${responsive ? "menu" : "close"}.svg`}
          onClick={() => setResponsive(!responsive)}
        />
      </div>
      <div className={`nav-links ${responsive ? "none" : ""}`}>
        <ul>
          <Link to='/products' onClick={() => setResponsive(!responsive)}>
            <li>Nos produits</li>
          </Link>
          <Link to='/sandbox' onClick={() => setResponsive(!responsive)}>
            <li>Bac à sable</li>
          </Link>
          <Link to='/brand' onClick={() => setResponsive(!responsive)}>
            <li>La marque</li>
          </Link>
          <Link to='/contact' onClick={() => setResponsive(!responsive)}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
