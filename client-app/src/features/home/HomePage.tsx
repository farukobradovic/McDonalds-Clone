import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Fragment>
      <main>
        <div className='main-landing'>
          <div className='container'>
            <div className='main-part'>
              <a href='https://www.korpa.ba/mcdonalds' target='_blank'>
                <img src='/assets/landing-1.jpg' alt='image' />
              </a>
            </div>
            <div className='secondary-part'>
              <div className='article-card'>
                <img src='/assets/landing-3.jpg' alt='image' />
                <h3 className='heading-tertiary'>
                  McDonald's Mobilna Aplikacija
                </h3>
                <p className='paragraph-article'>
                  Preuzmite našu mobilnu aplikaciju i saznajte sve o aktuelnim
                  pogodnostima iz naše ponude
                </p>
                <Link to='/mobile-app' className='button'>
                  Saznajte više
                </Link>
                {/* <a href='#mobilna-aplikacija.html' className='button'>
                  Saznajte više
                </a> */}
              </div>
              <div className='article-card'>
                <img src='/assets/landing-2.png' alt='image' />
                <h3 className='heading-tertiary'>Posjetite Naš McCafe</h3>
                <p className='paragraph-article'>
                  Posjetite naše McCafe objektate i uživajte u ugodnoj atmosferi
                  i ukusnim proizvodima
                </p>
                <a href='#' className='button'>
                  Saznajte više
                </a>
              </div>
              <div className='article-card'>
                <img src='/assets/landing-4.png' alt='image' />
                <h3 className='heading-tertiary'>Novosti U McDonald's</h3>
                <p className='paragraph-article'>
                  Saznajte sve o najnovijim ponudama i proizvodima koje smo
                  pripremili za vas
                </p>
                <a href='#' className='button'>
                  Saznajte više
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
