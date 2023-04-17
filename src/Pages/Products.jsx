import React from "react";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              numquam nemo reprehenderit fugiat animi, magnam ducimus vitae
              rerum quis iste commodi! Minima temporibus iste veritatis
              voluptatem maiores quia quibusdam hic nihil nisi quis, sed unde
              amet cumque numquam, dolore eveniet animi dicta iure a suscipit
              mollitia similique earum. Ipsum officia exercitationem quo placeat
              molestias necessitatibus rerum tempora minus iste quod sequi fugit
              qui nulla nisi veniam dolorum, accusantium illo iusto nostrum eius
              libero esse aperiam. Rem architecto aut exercitationem sapiente
              harum quo, iste aspernatur quas magni rerum ad, accusamus tempora,
              dolorem vitae minus beatae! Quo amet iste eum qui totam
              consequatur, voluptates dolor consequuntur eaque, aperiam quam
              repudiandae, modi harum alias dignissimos ab facere laborum nihil!
              Quia harum est modi.
            </p>
            <p className='product-price'>299€ TTC</p>
            <p className='product-desc-application'>
              Application disponible sur IOS & Android
            </p>
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
