import React, { Fragment } from "react";

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
              <a href='#' className='button-big'>
                Saznajte više
              </a>
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
              <a href='#' className='button-big'>
                Saznajte više
              </a>
            </div>
            <div className='family-box'>
              <div className='image'>
                <img src='/assets/porodica-3.png' alt='' />
              </div>
              <h1>Digitalne knjige</h1>
              <p>
                Otkrijte svijet čuda s našim interaktivnim digitalnim knjigama.
                Naše nove digitalne knjige su fantastičan put da vaši mališani
                otkriju čudesni svijet u kojem žive.
              </p>
              <a href='#' className='button-big'>
                Saznajte više
              </a>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};
