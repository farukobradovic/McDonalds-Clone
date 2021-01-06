import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useState } from "react";
import { FormEvent } from "react";
import { IUserFormValues } from "../../app/models/user";
import { RootStoreContext } from "../../app/stores/rootStore";

const Register = () => {
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;

  const initalizeFormState = () => {
    return {
      email: "",
      password: "",
      name: "",
      lastname: "",
      adress: "",
      phoneNumber: "",
      username: "",
    };
  };

  const clearFormState = () => {
    return {
      email: "",
      password: "",
      name: "",
      lastname: "",
      adress: "",
      phoneNumber: "",
      username: "",
    };
  };

  const [registerInfo, setRegisterInfo] = useState<IUserFormValues>(
    initalizeFormState
  );

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    // validate;
    setRegisterInfo({ ...registerInfo, [name]: value });
    // console.log(registerInfo);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setRegisterInfo(clearFormState);

    register(registerInfo).catch((err) => {
      console.log(err.response);
    });
  };

  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='career'>
            <div className='registration'>
              <div className='form'>
                <div className='left'>
                  <h1>Registracija</h1>
                  <p>
                    <span>Napomena:</span> Vaši lični podaci neće biti
                    upotrijebljeni u komercijalne svrhe niti proslijeđeni trećoj
                    strani.
                  </p>
                </div>
                <div className='right'>
                  <form onSubmit={handleSubmit}>
                    <div className='one-input'>
                      <label htmlFor=''>Ime</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Ime'
                        name='name'
                        id='name'
                        value={registerInfo.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor=''>Prezime</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Prezime'
                        name='lastname'
                        id='lastname'
                        value={registerInfo.lastname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor=''>Username</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Username po volji'
                        name='username'
                        id='username'
                        value={registerInfo.username}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor=''>Adresa</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Adresa na kojoj živim'
                        name='adress'
                        id='adress'
                        value={registerInfo.adress}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor=''>Broj telefona</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Moj broj telefona'
                        name='phoneNumber'
                        id='phoneNumber'
                        value={registerInfo.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor=''>Email adresa</label>
                      <input
                        type='text'
                        className='form-input'
                        placeholder='Email adresa'
                        name='email'
                        id='email'
                        value={registerInfo.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor=''>Šifra</label>
                      <input
                        type='password'
                        className='form-input'
                        placeholder='Šifra'
                        name='password'
                        id='password'
                        value={registerInfo.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button>Pošalji</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default observer(Register);
