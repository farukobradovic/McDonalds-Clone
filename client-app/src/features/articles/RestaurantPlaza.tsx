import React, { Fragment } from "react";

export const RestaurantPlaza = () => {
  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='restaurant-description'>
            <div className='left'>
              <h1>RESTORAN RADON PLAZA</h1>
              <p>Adresa: Džemala Bijedića 185, Sarajevo, 71000</p>
              <p>Telefon: 033 838 403</p>
              <p className='bolder'>
                <span>Radno vrijeme: </span>8:00-23:00
              </p>
              <a href='#' className='button-medium-red'>
                <i className='fas fa-map-marker-alt'></i> Posjetite nas
              </a>
              <p className='first'>
                Prvi McDonalds drive restoran u BiH svečano je otvoren 19.
                decembra 2011. godine. Prostire se na 415 kvadratnih metara i
                posjeduje 101 sjedeće mjesta unutar restorana i 40 mjesta na
                terasi.
              </p>
              <p className='second'>
                Drive linija restorana radi 24 sata. Restoran posjeduje i
                vlastita parking mjesta. Igraonica za djecu se nalazi na terasi.
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
