import React, { Fragment } from "react";

interface IProps {
  setEditMode: any;
  editMode: boolean;
}
export const EditProfile: React.FC<IProps> = ({ setEditMode, editMode }) => {
  return (
    <Fragment>
      <div className='infos-edit'>
        <div className='upper'>
          <h2>Ažurirajte profil</h2>
        </div>
        <div className='down'>
          <form action='post'>
            <div className='one-input'>
              <label htmlFor=''>Ime</label>
              <input type='text' className='form-input' placeholder='Ime' />
            </div>
            <div className='one-input'>
              <label htmlFor=''>Prezime</label>
              <input type='text' className='form-input' placeholder='Prezime' />
            </div>
            <div className='one-input'>
              <label htmlFor=''>Adresa</label>
              <input
                type='text'
                className='form-input'
                placeholder='Adresa na kojoj živim'
              />
            </div>
            <div className='one-input'>
              <label htmlFor=''>Broj telefona</label>
              <input
                type='text'
                className='form-input'
                placeholder='Moj broj telefona'
              />
            </div>
            <div className='two-inputs'>
              <button className='submit-button' style={{ marginRight: "1rem" }}>
                Potvrdi
              </button>
              <button
                onClick={() => setEditMode(!editMode)}
                className='submit-button'
                style={{ backgroundColor: "#fff", color: " #da291c" }}
              >
                Poništi
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
