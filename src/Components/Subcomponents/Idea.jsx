import React from "react";
import { Link } from "react-router-dom";

export const Idea = ({ innerRef }) => {
  return (
    <div className='idea' ref={innerRef}>
      <h1>Reizokonnect le frigo qui sait ce dont vous avez besoin !</h1>
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
              Notre nouveau produit phare, Reizoko, est un réfrigérateur
              intelligent qui scanne et trie les articles par catégories sur une
              application dédiée. Ce réfrigérateur est capable de reconnaître
              les fruits, les légumes, les viandes et les autres aliments et de
              les organiser automatiquement. De plus, il indique une date
              d'expiration en fonction de l'aliment !
            </p>
            <div className='product-buttons-home'>
              <Link to='/sandbox'>Regarder la démo</Link>
            </div>
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
              Vos courses deviennent plus facile grâce à Reizoko, vérifier ce
              que vous avez dans votre frigo à n'importe quelle moment ! Votre
              smartphone devient votre frigo et vous aide à vous organisez grâce
              à l'application Reizoko App.{" "}
            </p>
          </div>
        </div>
        <div className='objectif-card-wrapper'>
          <img src='/assets/food-waste.jpg' className='object-img' />
          <div className='objectif-text-wrapper'>
            <h3>
              Limiter le gaspillage d'aliments grâce à votre frigo Reizoko !
            </h3>
            <p>
              L'application fournie gratuitement avec votre frigo vous permet de
              suivre en temps réel la date d'expiration de vos aliments. Grâce à
              cela, vous devenez acteur contre le gaspillage alimentaire !
            </p>
          </div>
        </div>
        <div className='objectif-card-wrapper'>
          <img src='/assets/planetesave.svg' className='object-img' />
          <div className='objectif-text-wrapper'>
            <h3>Devenez acteur de la protection de l'environnement</h3>
            <p>
              Avec Reizoko, votre frigo entièrement construit à partir de
              matériaux écologiques et durables, prenez en main le gaspillage
              alimentaire et contribuez à la protection de l'environnement grâce
              à la gestion intelligente de la consonommation de l'énergie du
              frigo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
