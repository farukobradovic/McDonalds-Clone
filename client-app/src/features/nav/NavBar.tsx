import { observer } from "mobx-react-lite";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";

const NavBar = () => {
  const rootStore = useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
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
            <a
              href='https://www.facebook.com/McDonaldsBiH'
              target='_blank'
              className='social-links-link'
            >
              <i className='fab fa-facebook'></i>
            </a>
            <a
              href='https://www.instagram.com/mcdonalds.bih/'
              target='_blank'
              className='social-links-link'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#' className='social-links-link'>
              <i className='fas fa-shopping-cart'></i>
            </a>
            {/* <a href='#' className='social-links-link'>
              <i className='fas fa-user'></i>
            </a> */}
            {user ? (
              <div className='dropdown'>
                <i className='fas fa-user'></i>
                <div className='dropdown-content'>
                  <Link to='/user'>
                    <i className='fas fa-user-circle'></i> Moj profil
                  </Link>
                  <button
                    onClick={() => logout()}
                    style={{
                      width: "100%",
                      color: "#232323",
                      padding: "12px 16px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.5rem",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <i
                      className='fas fa-sign-out-alt'
                      style={{ fontSize: "2rem", marginRight: "2rem" }}
                    ></i>{" "}
                    Odjava
                  </button>
                </div>
              </div>
            ) : (
              <div className='dropdown'>
                <i className='fas fa-user'></i>
                <div className='dropdown-content'>
                  <Link to='/register'>
                    <i className='fas fa-user'></i> Registracija
                  </Link>
                  <Link to='/login'>
                    <i className='fas fa-sign-out-alt'></i> Prijava
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default observer(NavBar);
