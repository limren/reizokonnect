import React from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div className='products entrance-1'>
      <h2>Tous nos produits sont disponibles ici !</h2>
      <div className='products-wrapper'>
        <div className='product-wrapper'>
          <div className='product-img-wrapper'>
            <h3 className='new-product'>Nouveau produit !</h3>
            <img
              src='./assets/fridge-illustration.png'
              className='product-img'
            />
          </div>
          <div className='product-desc-wrapper'>
            <h2>Le frigo Reizoko</h2>
            <p className='product-desc'>
              Reizoko, un frigo écoresponsable, assemblé à partir de matérieux
              écologiques et durables, tels que l'acier inoxydable recyclé et de
              panneaux isolants en mousse polyuréthane. Egalement, il est équipé
              de système de refroidissement efficace. De plus, il est équipé
              d'un système de gestion de l'énergie intelligent qui ajuste la
              température en fonction du contenu et de l'utilisation. C'est
              également un frigo révolutionnaire technologiquement, il est
              équipé d'un scanner de codes-barres pour permettre à l'utilisateur
              de suivre facilement les dates de péremption et de gérer le stock
              de nourriture. Les informations sont automatiquement importées sur
              une application gratuite, fournie avec le frigo.
            </p>
            <p className='product-price'>1099€ TTC</p>
            <p className='product-desc-application'>
              Application disponible sur IOS & Android
            </p>
            <div className='product-buttons'>
              <Link to='/sandbox'>Regarder la démo</Link>
              <Link to=''>Acheter</Link>
            </div>
          </div>
        </div>
        <div>
          <h3>
            D'autres produits arrivent, inscrivez-vous à notre{" "}
            <span className='newsletter'>Newsletter</span> pour ne pas les
            manquer !
          </h3>
        </div>
      </div>
    </div>
  );
};
