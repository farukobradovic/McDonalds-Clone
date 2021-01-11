import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Family = () => {
  return (
    <Fragment>
      <div className='container'>
        <main>
          <div className='family'>
            <div className='family-box'>
              <div className='image'>
                <img src='/assets/porodica-1.png' alt='' />
              </div>
              <h1>Happy studio</h1>
              <p>
                Happy Studio je jedinstven, siguran i u potpunosti BESPLATAN
                digitalni svijet stvoren da zabavi djecu i njihove obitelji!
              </p>
              <Link to='/' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='family-box'>
              <div className='image'>
                <img src='/assets/porodica-2.png' alt='' />
              </div>
              <h1>Happy meal</h1>
              <p>
                Happy Meal obrok za svoje dijete odabirete i slažete sami.
                Ponuđene kombinacije su različite, a svi sastojci najbolje su
                kvalitete i okusa.
              </p>
              <Link to='/' className='button-big'>
                Saznajte više
              </Link>
            </div>
            <div className='family-box'>
              <div className='image'>
                <img src='/assets/porodica-3.png' alt='' />
              </div>
              <h1>Digitalne knjige</h1>
              <p>
                Otkrijte svijet čuda s našim interaktivnim digitalnim knjigama.
                Naše nove digitalne knjige su fantastičan put da vaši.
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
