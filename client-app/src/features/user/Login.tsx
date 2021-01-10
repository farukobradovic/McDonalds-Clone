import { observer } from "mobx-react-lite";
import React, { FormEvent, Fragment, useContext, useState } from "react";
import { IUserFormValues } from "../../app/models/user";
import { RootStoreContext } from "../../app/stores/rootStore";
import { combineValidators, isRequired } from "revalidate";
import { Link } from "react-router-dom";

const validate = combineValidators({
  email: isRequired("email"),
  password: isRequired("password"),
});

const Login = () => {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;

  const initalizeFormState = () => {
    return {
      email: "",
      password: "",
    };
  };

  const clearFormState = () => {
    return {
      email: "",
      password: "",
    };
  };

  const [loginInfo, setLoginInfo] = useState<IUserFormValues>(
    initalizeFormState
  );

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    // validate;
    setLoginInfo({ ...loginInfo, [name]: value });
    // console.log(loginInfo);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoginInfo(clearFormState);

    login(loginInfo).catch((err) => {
      console.log(err.response);
    });
  };

  return (
    <Fragment>
      <main>
        <div className='container'>
          <div className='career'>
            <div className='login'>
              <div className='form'>
                <div className='left'>
                  <h1>Prijava</h1>
                  <p>
                    <span>Napomena:</span> Vaši lični podaci neće biti
                    upotrijebljeni u komercijalne svrhe niti proslijeđeni trećoj
                    strani.
                  </p>
                </div>
                <div className='right'>
                  <form onSubmit={handleSubmit}>
                    <div className='one-input'>
                      <label htmlFor='email'>Email adresa</label>
                      <input
                        onChange={handleInputChange}
                        value={loginInfo.email}
                        name='email'
                        id='email'
                        type='text'
                        className='form-input'
                        placeholder='Unesite vašu email adresu'
                        required
                      />
                    </div>
                    <div className='one-input'>
                      <label htmlFor='password'>Šifra</label>
                      <input
                        onChange={handleInputChange}
                        value={loginInfo.password}
                        type='password'
                        name='password'
                        id='password'
                        className='form-input'
                        placeholder='Unseite šifru'
                        required
                      />
                    </div>

                    <button>Pošalji</button>
                  </form>
                  <p className='login-p'>
                    Niste registrovani ? Registrujte se na sljedeći link{" "}
                    <Link to='/register'>Registracija</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default observer(Login);
