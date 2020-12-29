import React, { Fragment } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const RestaurantTitova = () => {
  const fadeImages = [
    "assets/restaurant-1.png",
    "assets/restaurant-2.png",
    "assets/restaurant-3.png",
    "assets/restaurant-4.png",
  ];
  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='restaurant-description'>
            <div className='left'>
              <h1>RESTORAN TITOVA</h1>
              <p>Adresa: Maršala Tita 36, Sarajevo, 71000</p>
              <p>Telefon: 033 838 400</p>
              <p className='bolder'>
                <span>Radno vrijeme: </span>8:00-23:00
              </p>
              <a href='#' className='button-medium-red'>
                <i className='fas fa-map-marker-alt'></i> Posjetite nas
              </a>
              <p className='first'>
                Prvi McDonaldsov restoran u Bosni i Hercegovini je restoran
                Titova koji je svečano otvoren 20. jula 2011. godine. Prostire
                se na 600 kvadratnih metara i posjeduje 170 sjedećih mjesta. Na
                dvije terase nalazi se još 52 sjedeća mjesta.
              </p>
              <p className='second'>
                Restoran je izveden po urbanom dizajnu Phelippea Avanzija iz
                Francuske. Ovakvo uređenje ima samo nekoliko ekskluzivnih
                McDonalds restorana u Evropi.
              </p>
            </div>
            <div className='right'>
              <div className='images' style={{ maxWidth: "50rem" }}>
                <div className='slide-container'>
                  <Slide>
                    <div className='each-fade'>
                      <div className='image-container'>
                        <img src={fadeImages[1]} alt='restaurant' />
                      </div>
                    </div>
                    <div className='each-fade'>
                      <div className='image-container'>
                        <img src={fadeImages[2]} alt='restaurant' />
                      </div>
                    </div>
                    <div className='each-fade'>
                      <div className='image-container'>
                        <img src={fadeImages[2]} alt='restaurant' />
                      </div>
                    </div>
                    <div className='each-fade'>
                      <div className='image-container'>
                        <img src={fadeImages[3]} alt='restaurant' />
                      </div>
                    </div>
                  </Slide>
                </div>
                {/* <img src='/assets/restaurant-1.png' alt='restaurant' /> */}
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
