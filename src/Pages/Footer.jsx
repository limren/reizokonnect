import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h3>Reizokonnect</h3>
      </div>
      <div className='footer-about'>
        <ul>
          <li>
            <Link to='/'>A propos de Reizokonnect</Link>
          </li>
          <li>Carrière</li>
          <li>Développement durable avec Reizokonnect</li>
          <li>
            <div className='footer-links'>
              <h4>Suivez-nous sur les réseaux sociaux</h4>
              <div>
                <img src='./assets/instagram.png' className='footer-link' />
                <img src='./assets/linkedin.svg' className='footer-link' />
                <img src='./assets/twitter.svg' className='footer-link' />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
