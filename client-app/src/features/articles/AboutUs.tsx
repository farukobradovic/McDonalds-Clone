import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <Fragment>
      <div className='container'>
        <main>
          <div className='aboutus'>
            <div className='aboutus-box'>
              <div className='image'>
                <img src='/assets/onama-1.gif' alt='' />
              </div>
              <h1>O nama</h1>
              <p>
                McDonald’s je jedan od najvećih svjetskih brendova, poznat po
                izrazito visokim standardima i sinonim je za brzu i ljubaznu
                uslugu
              </p>
              <Link to='/' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='aboutus-box'>
              <div className='image'>
                <img src='/assets/onama-2.jpg' alt='' />
              </div>
              <h1>Historija</h1>
              <p>
                McDonald’s korporacija broji više od 34.000 restorana u 122
                zemlje, u kojima se dnevno usluži preko 69 miliona gostiju
              </p>
              <Link to='/' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='aboutus-box'>
              <div className='image'>
                <img src='/assets/onama-3.jpg' alt='' />
              </div>
              <h1>Zaštita okoliša</h1>
              <p>
                Prilikom izbora ambalaže vodimo računa o funkcionalnosti,
                izgledu, a najviše o zaštiti hrane kako bi očuvali svježinu i
                toplinu proizvoda.
              </p>
              <Link to='/' className='button-big'>
                Saznajte više
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};
