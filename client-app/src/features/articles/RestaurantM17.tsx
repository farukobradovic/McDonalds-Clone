import React, { Fragment } from "react";

export const RestaurantM17 = () => {
  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='restaurant-description'>
            <div className='left'>
              <h1>Restoran Mostar m17</h1>
              <p>Adresa: Bišće Polje BB, Mostar 88000</p>
              <p>Telefon: 036 843-900</p>
              <p className='bolder'>
                <span>Radno vrijeme: </span>8:00-23:00
              </p>
              <a href='#' className='button-medium-red'>
                <i className='fas fa-map-marker-alt'></i> Posjetite nas
              </a>
              <p className='first'>
                Najmoderniji McDonald’s drive restoran u BiH otvoren 07. juna
                2019. godine. Posjeduje 125 sjedećih mjesta unutar restorana i
                84 mjesta na terasi. Gosti na raspologanju imaju samoposlužni
                kiosk te opciju posluživanja naručene hrane za stolom.
              </p>
              <p className='second'>
                Drive linija restorana radi 24 sata. Restoran posjeduje i
                vlastita parking mjesta. Igraonica za djecu se nalazi na teras
              </p>
            </div>
            <div className='right'>
              <div className='images'>
                <img src='/assets/restaurant-1.png' alt='restaurant' />
              </div>
              <div className='options'>
                <div className='left'>
                  <span>
                    <i className='fas fa-wifi'></i> Wifi
                  </span>
                  <span>
                    <i className='fas fa-store-alt'></i> Kiosk
                  </span>
                  <span>
                    <i className='far fa-sun'></i> Terasa
                  </span>
                  <span>
                    <i className='fas fa-parking'></i> Parking
                  </span>
                  <span>
                    <i className='fas fa-coffee'></i> McCafee
                  </span>
                  <span>
                    <i className='fas fa-credit-card'></i> Debitna kartica
                  </span>
                  <span>
                    <i className='fas fa-credit-card'></i> Kreditna kartica
                  </span>
                </div>
                <div className='right'>
                  <span>
                    <i className='fas fa-car'></i> Drive Thru
                  </span>
                  <span>
                    <i className='fab fa-slideshare'></i> Tobogan
                  </span>
                  <span>
                    <i className='fas fa-signal'></i> Otvoreno 0 - 24 sata
                  </span>
                  <span>
                    <i className='fas fa-parking'></i> Parking za autobuse
                  </span>
                  <span>
                    <i className='fas fa-chair'></i> Sjedeća mjesta u lobiju
                  </span>
                  <span>
                    <i className='fas fa-table'></i> Posluživanje hrane na
                    stolove
                  </span>
                  <span>
                    <i className='fas fa-hands-helping'></i> Pristup za osobe sa
                    invaliditetom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
