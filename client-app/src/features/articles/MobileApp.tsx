import React, { Fragment } from "react";

export const MobileApp = () => {
  return (
    <Fragment>
      <div className='container'>
        <main>
          <div className='mobile-app'>
            <div className='image'>
              <img src='/assets/mobilna-aplikacija.png' alt='mobile' />
            </div>
            <p>
              Uz mobilnu aplikaciju McDonald’s Bosna i Hercegovina, imate
              pristup nizu pogodnosti i informacija o nama i našoj ponudi. Kao
              nagradu, dajemo vam samo vaše kupone! Da, dobro ste pročitali. Uz
              McDonald’s mobilnu aplikaciju imate svoje kupone 365 dana u
              godini, koji će se periodično mijenjati! Jedini uvjet je da
              preuzmete aplikaciju i registrirate se.
            </p>
            <p>
              Svi vaši kuponi će tako uvijek biti uz vas, no to nije kraj
              pogodnostima. Uz mobilnu aplikaciju imate apsolutno sve
              informacije o restoranima, lokacijama, sadržaju i radnom vremenu,
              a uvijek ćete biti prvi informirani i o novim sendvičima i
              akcijama.
            </p>
            <div className='sides'>
              <div className='left'>
                <p>
                  Naša aplikacija daje apsolutno sve nutritivne podatke i
                  alergene o svim proizvodima. Ukoliko tražite posao možete se
                  prijaviti posredstvom aplikacije, a tu su i podaci o seriji
                  Happy Meal igračaka.
                </p>
                <p>
                  Ova mobilna aplikacija trenutno se može koristiti u više od 50
                  država širom svijeta i iz mjeseca u mjesec ih je sve više tako
                  da dobivate pristup svim podacima i kuponima u državama poput
                  Hrvatske, Austrije, Češke, Grčke, Italije, Turske, Srbije,
                  Slovenije, Mađarske itd.
                </p>
                <p>Aplikacije možete preuzeti klikom na linkove:</p>
                <p>
                  Android:{" "}
                  <a href='https://goo.gl/1cVYmL'>https://goo.gl/1cVYmL</a>
                </p>
                <p>
                  iOS:{" "}
                  <a href='https://apple.co/2CjcUE5'>
                    https://apple.co/2CjcUE5
                  </a>{" "}
                </p>
              </div>
              <div className='right'>
                <h1>Skini našu aplikaciju</h1>
                <img src='/assets/appstore.png' alt='' />
                <img src='/assets/googleplay.png' alt='' />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};
