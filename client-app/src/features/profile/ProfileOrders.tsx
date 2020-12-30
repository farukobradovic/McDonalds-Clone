import React, { Fragment } from "react";

export const ProfileOrders = () => {
  return (
    <Fragment>
      <div className='factures'>
        <div className='upper'>
          <h2>Lista narudžbi</h2>
        </div>
        <div className='down'>
          <div className='row'>
            <div className='left'>
              <p>Datum narudžbe: 5.5.2021 20:00 PM</p>
            </div>
            <div className='middle'>
              <p>Cijena: 28.00 BAM</p>
            </div>
            <div className='right'>
              <a href='#' className='button'>
                Pogledaj
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='left'>
              <p>Datum narudžbe: 5.5.2021 20:00 PM</p>
            </div>
            <div className='middle'>
              <p>Cijena: 78.00 BAM</p>
            </div>
            <div className='right'>
              <a href='#' className='button'>
                Pogledaj
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='left'>
              <p>Datum narudžbe: 5.5.2021 20:00 PM</p>
            </div>
            <div className='middle'>
              <p>Cijena: 15.00 BAM</p>
            </div>
            <div className='right'>
              <a href='#' className='button'>
                Pogledaj
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
