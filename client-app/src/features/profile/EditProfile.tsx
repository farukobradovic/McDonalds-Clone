import { observer } from "mobx-react-lite";
import React, { FormEvent, Fragment, useContext, useState } from "react";
import { LoadingComponent } from "../../app/layout/LoadingComponent";
import { IUserFormValues } from "../../app/models/user";
import { RootStoreContext } from "../../app/stores/rootStore";

interface IProps {
  setEditMode: any;
  editMode: boolean;
}
const EditProfile: React.FC<IProps> = ({ setEditMode, editMode }) => {
  const rootStore = useContext(RootStoreContext);
  const { user, editUser, loadingEdit } = rootStore.userStore;

  const initalizeFormState = () => {
    return {
      name: user!.name,
      lastname: user!.lastname,
      adress: user!.adress,
      phoneNumber: user!.phoneNumber,
    };
  };

  const clearFormState = () => {
    return {
      name: "",
      lastname: "",
      adress: "",
      phoneNumber: "",
    };
  };

  const [edit, setEdit] = useState<IUserFormValues>(initalizeFormState);

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    // validate;
    setEdit({ ...edit, [name]: value });
    // console.log(edit);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEdit(clearFormState);
    setEditMode(!editMode);

    editUser(edit).catch((err) => {
      console.log(err.response);
    });
  };

  if (loadingEdit) return <LoadingComponent content='Editing user...' />;

  return (
    <Fragment>
      <div className='infos-edit'>
        <div className='upper'>
          <h2>Ažurirajte profil</h2>
        </div>
        <div className='down'>
          <form onSubmit={handleSubmit}>
            <div className='one-input'>
              <label htmlFor=''>Ime</label>
              <input
                type='text'
                className='form-input'
                placeholder='Ime'
                value={edit!.name}
                name='name'
                onChange={handleInputChange}
              />
            </div>
            <div className='one-input'>
              <label htmlFor=''>Prezime</label>
              <input
                type='text'
                className='form-input'
                placeholder='Prezime'
                value={edit!.lastname}
                name='lastname'
                onChange={handleInputChange}
              />
            </div>
            <div className='one-input'>
              <label htmlFor=''>Adresa</label>
              <input
                type='text'
                className='form-input'
                placeholder='Adresa na kojoj živim'
                value={edit!.adress}
                name='adress'
                onChange={handleInputChange}
              />
            </div>
            <div className='one-input'>
              <label htmlFor=''>Broj telefona</label>
              <input
                type='text'
                className='form-input'
                placeholder='Moj broj telefona'
                value={edit!.phoneNumber}
                name='phoneNumber'
                onChange={handleInputChange}
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

export default observer(EditProfile);
