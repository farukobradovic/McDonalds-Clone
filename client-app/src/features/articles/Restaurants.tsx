import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Restaurants = () => {
  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='restaurants'>
            <div className='restaurant'>
              <a href='#'>
                {" "}
                <img src='/assets/restaurant-1.png' alt='restaurant' />
              </a>
              <h1>Restoran Titova</h1>
              <p>
                Prvi McDonaldsov restoran u Bosni i Hercegovini je restoran
                Titova koji je svečano otvoren 20. jula 2011.
              </p>
              <Link to='/restaurant-Titova' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='restaurant'>
              <a href='#'>
                {" "}
                <img src='/assets/restaurant-2.png' alt='restaurant' />
              </a>
              <h1>RESTORAN RADON PLAZA</h1>
              <p>
                Prvi McDonalds drive restoran u BiH svečano je otvoren 19.
                decembra 2011.
              </p>
              <Link to='restaurant-Plaza' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='restaurant'>
              <a href='#'>
                {" "}
                <img src='/assets/restaurant-3.png' alt='restaurant' />
              </a>
              <h1>RESTORAN MEPAS MALL</h1>
              <p>
                McDonaldsov restoran u Mostaru u šoping centru Mepas Mall
                svečano je otvoren 13. aprila 2012.
              </p>
              <Link to='/restaurant-Mepas-Mall' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='restaurant'>
              <a href='#'>
                {" "}
                <img src='/assets/restaurant-4.png' alt='restaurant' />
              </a>
              <h1>RESTORAN MOSTAR M17</h1>
              <p>
                Najmoderniji McDonald's drive restoran u BiH otvoren 07. juna
                2019. godine.
              </p>
              <Link to='/restaurant-Mostar-M17' className='button-big'>
                Saznajte više
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
