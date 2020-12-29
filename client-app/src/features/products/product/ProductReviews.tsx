import React, { Fragment } from "react";

export const ProductReviews = () => {
  return (
    <Fragment>
      <div className='reviews'>
        <h2>Ostavite komentar na proizvod: </h2>
        <div className='comment'>
          <div className='upper'>
            <img src='/assets/user.jpg' alt='' />
            <div className='desc'>
              <p>Faruk Obradović</p>
              <p className='small-date'>20.04.2021 15:33 PM</p>
            </div>
          </div>
          <div className='down'>
            <p>
              Ovaj proizvod je stvarno dobar. Jedva čekam da ga ponovo naručim.
              Sve preporuke. Pozdrav !
            </p>
          </div>
        </div>
        <div className='comment'>
          <div className='upper'>
            <img src='/assets/user.jpg' alt='' />
            <div className='desc'>
              <p>Belmin Mahić</p>
              <p className='small-date'>20.04.2021 15:33 PM</p>
            </div>
          </div>
          <div className='down'>
            <p>
              Ovaj proizvod je stvarno dobar. Jedva čekam da ga ponovo naručim.
              Sve preporuke. Pozdrav !
            </p>
          </div>
        </div>
      </div>
      <form className='form-comment'>
        <textarea placeholder='Ostavite komentar...'></textarea>
        <button type='submit' className='submit-button'>
          Potvrdi
        </button>
      </form>
    </Fragment>
  );
};
