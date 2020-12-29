import React, { Fragment } from "react";
import { Link } from "react-scroll";

export const ProductsSections = () => {
  return (
    <Fragment>
      <div className='category-list'>
        <Link
          to='Sendviči'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-1.png' alt='' />
          <p className='paragraph-bold'>Sendviči</p>
        </Link>
        <Link
          to='Chicken McNuggets'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-2.png' alt='' />

          <p className='paragraph-bold'>Chicken McNuggets</p>
        </Link>
        <Link
          to='McWrap'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-3.png' alt='' />

          <p className='paragraph-bold'>McWrap</p>
        </Link>
        <Link
          to='Deserti'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-4.png' alt='' />
          <p className='paragraph-bold'>Deserti</p>
        </Link>
        <Link
          to='Pića'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-5.png' alt='' />

          <p className='paragraph-bold'>Pića</p>
        </Link>
        <Link
          to='Salate'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-6.png' alt='' />

          <p className='paragraph-bold'>Salate</p>
        </Link>
        <Link
          to='Prilozi i umaci'
          className='category-list-card'
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <img src='/assets/category-7.png' alt='' />

          <p className='paragraph-bold'>Prilozi i umaci</p>
        </Link>
      </div>
    </Fragment>
  );
};
