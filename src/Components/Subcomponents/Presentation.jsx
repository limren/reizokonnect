import React from "react";

export const Presentation = ({ goNext, scrollToBottom }) => {
  return (
    <div className='presentation entrance-1'>
      <div className='presentation-title-section'>
        <div className='title'>
          <h2>Avez-vous déjà été confronté à une telle situation ?</h2>
          <p>
            N'attendez plus, connectez-vous à vos aliments en temps réel grâce à
            votre frigo Reizoko !
          </p>
          <div className='next-comp entrance-2'>
            <h3>En savoir plus !</h3>
            <img
              src='/assets/arrow.svg'
              className='arrow'
              onClick={() => scrollToBottom(goNext)}
            />
          </div>
        </div>
        <div className='illustration'>
          <img
            src='/assets/presentation-illustration.svg'
            className='presentation-illustration'
            alt='Brain thinking of which item to pick'
          />
        </div>
      </div>
    </div>
  );
};
