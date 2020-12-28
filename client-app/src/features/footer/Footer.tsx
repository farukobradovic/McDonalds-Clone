import React, { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <div className='logo'>
          <div className='logo-img'>
            <img src='/assets/mcdonalds-logo.png' alt='mcdonalds' />
          </div>
          <div className='desc'>
            <a href='#' className='mcd'>
              MCDONALD'S
            </a>
            <p>&copy; 2019 McDonald's. All rights Reserved</p>
          </div>
        </div>
        <div className='links'>
          <a href='#section-about'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='#section-about'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#section-about'>
            <i className='fas fa-envelope'></i>
          </a>
          <a href='#section-about'>
            <i className='fas fa-phone'></i>
          </a>
        </div>
        <div className='privacy'>
          <ul>
            <li>
              <a href='#'>Kolačići</a>
            </li>
            <li>
              <a href='#'>Privatnost</a>
            </li>
            <li>
              <a href='#'>Uvjeti korištenja</a>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
};
