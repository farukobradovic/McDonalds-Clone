import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Fragment>
      <nav className='navigation'>
        <div className='container'>
          <Link to='/' className='logo'>
            <img src='/assets/mcdonalds-logo.png' alt='logo' />
          </Link>
          {/* <a href='#sss' className='logo'>
            <img src='/assets/mcdonalds-logo.png' />
          </a> */}
          <div className='list-box'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/products' className='list__item__link'>
                  Proizvodi
                </Link>
              </li>
              <li className='list__item'>
                <Link to='/family' className='list__item__link'>
                  Porodica
                </Link>
              </li>
              <li className='list__item'>
                <Link to='/about-us' className='list__item__link'>
                  O nama
                </Link>
              </li>
              <li className='list__item'>
                <Link to='/restaurants' className='list__item__link'>
                  Restorani
                </Link>
              </li>
              <li className='list__item'>
                <a
                  href='https://mcdonalds.fast-insight.com/voc/ba/ba'
                  target='_blank'
                  className='list__item__link'
                >
                  Anketa
                </a>
              </li>
              <li className='list__item'>
                <Link to='/career' className='list__item__link'>
                  Karijera
                </Link>
              </li>
            </ul>
          </div>
          <div className='social-links'>
            <a href='#' className='social-links-link'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' className='social-links-link'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='social-links-link'>
              <i className='fas fa-shopping-cart'></i>
            </a>
            <a href='#' className='social-links-link'>
              <i className='fas fa-user'></i>
            </a>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
