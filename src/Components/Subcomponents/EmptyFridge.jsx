import React from "react";

export const EmptyFridge = ({ animateModel, animationTriggered }) => {
  return (
    <div className='empty-fridge'>
      <h3>Ton frigo est vide !</h3>
      {animationTriggered ? (
        <div className='filling-fridge'>Remplissage en cours...</div>
      ) : (
        <button onClick={() => animateModel()} className='waiting-animation'>
          Remplir mon frigo avec mes courses.
        </button>
      )}
    </div>
  );
};
