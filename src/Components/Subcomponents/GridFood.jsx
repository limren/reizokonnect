import React, { useEffect } from "react";

export const GridFood = () => {
  return (
    <div className='grid-food'>
      <div className='grid-food-header'>
        <input
          type='text'
          className='grid-food-header-input'
          placeholder='Chercher un aliment'
        />
      </div>
      <div className='grid-food-items'>
        <div className='grid-food-item'>
          <img src='./assets/brocoli.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Brocoli</p>
            <p className='grid-food-item-date'>Expiration : 28 Avr.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/peche.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Pêche</p>
            <p className='grid-food-item-date'>Expiration : 30 Avr.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/poire.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Poire</p>
            <p className='grid-food-item-date'>Expiration : 25 Avr.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/poivron.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Poivron</p>
            <p className='grid-food-item-date'>Expiration : 11 Mai.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/banane.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Banane</p>
            <p className='grid-food-item-date'>Expiration : 5 Mai.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/carotte.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Carotte</p>
            <p className='grid-food-item-date'>Expiration : 31 Avr.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/tomate.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Tomate</p>
            <p className='grid-food-item-date'>Expiration : 2 Mai.</p>
          </div>
        </div>
        <div className='grid-food-item'>
          <img src='./assets/salade.png' className='grid-food-item-image' />
          <div className='grid-food-item-footer'>
            <p className='grid-food-item-name'>Salade</p>
            <p className='grid-food-item-date'>Expiration : 30 Avr.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
