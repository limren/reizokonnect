import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>Reizokonnect</h2>
      </div>
      <div className='nav-links'>
        <ul>
          <li>Nos produits</li>

          <Link to='/sandbox'>
            <li>Bac à sable</li>
          </Link>
          <li>La marque</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
