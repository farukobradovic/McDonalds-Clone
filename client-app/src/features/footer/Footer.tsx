import React, { Fragment } from "react";
import { Link } from "react-router-dom";

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
          <Link to='/'>
            <i className='fab fa-facebook'></i>
          </Link>
          <Link to='/'>
            <i className='fab fa-instagram'></i>
          </Link>
          <Link to='/'>
            <i className='fas fa-envelope'></i>
          </Link>
          <Link to='/'>
            <i className='fas fa-phone'></i>
          </Link>
        </div>
        <div className='privacy'>
          <ul>
            <li>
              <Link to='/'>Kolačići</Link>
            </li>
            <li>
              <Link to='/'>Privatnost</Link>
            </li>
            <li>
              <Link to='/'>Uvjeti korištenja</Link>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
};
