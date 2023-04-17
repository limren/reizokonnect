import React from "react";

export const Idea = ({ innerRef }) => {
  return (
    <div className='idea' ref={innerRef}>
      <h1>Reizokonnect, un objectif, le vôtre aussi.</h1>
      <div className='objectif'>
        <div className='objectif-card-wrapper'>
          <img
            src='/assets/fridge-illustration.png'
            className='object-img fridge-illustration'
            alt='Frigo Reizoko'
          />
          <div className='objectif-text-wrapper'>
            <h3>Reizoko, un frigo qui vous complète</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime, consequuntur iste facilis vel eius doloremque pariatur
              illum, ducimus inventore, eveniet asperiores reiciendis quibusdam
            </p>
          </div>
        </div>
        <div className='objectif-card-wrapper'>
          <img
            src='/assets/phone.svg'
            className='object-img'
            alt='Une main tenant un téléphone'
          />
          <div className='objectif-text-wrapper'>
            <h3>Accès en temps réel de vos aliments depuis n'importe où</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime, consequuntur iste facilis vel eius doloremque pariatur
              illum, ducimus inventore, eveniet asperiores reiciendis quibusdam
            </p>
          </div>
        </div>
        <div className='objectif-card-wrapper'>
          <img src='/assets/phone.svg' className='object-img' />
          <div className='objectif-text-wrapper'>
            <h3>Accès en temps réel de vos aliments depuis n'importe où</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime, consequuntur iste facilis vel eius doloremque pariatur
              illum, ducimus inventore, eveniet asperiores reiciendis quibusdam
            </p>
          </div>
        </div>
        <div className='objectif-card-wrapper'>
          <img src='/assets/phone.svg' className='object-img' />
          <div className='objectif-text-wrapper'>
            <h3>Accès en temps réel de vos aliments depuis n'importe où</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              maxime, consequuntur iste facilis vel eius doloremque pariatur
              illum, ducimus inventore, eveniet asperiores reiciendis quibusdam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};