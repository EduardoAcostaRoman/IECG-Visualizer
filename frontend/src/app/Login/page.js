'use client';

import { useState, useRef, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import classes from './page.module.css';
import axios from 'axios';
import UserContext from '@/components/store/user-context';

function Login() {
  const router = useRouter();
  const userCtx = useContext(UserContext);

  const [wrongValidationText, setWrongValidationText] = useState(false);

  const nameRef = useRef();
  const passwordRef = useRef();

  const validateUser = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    let userValidated = false;

    axios
      .get('http://localhost:4000/users')
      .then((response) => {
        for (const user of response.data) {
          if (user.name === enteredName && user.password === enteredPassword) {
            userValidated = true;

            userCtx.addUser({
              id: user._id,
              name: user.name,
              email: user.email,
              password: user.password,
            });
            router.push('/MainPage');
          }
        }
        if (!userValidated) {
          setWrongValidationText(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 l3 offset-m3'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Iniciar sesión</span>
              <form onSubmit={validateUser} className='center-align'>
                <div
                  className='input-field'
                  onClick={() => setWrongValidationText(false)}
                >
                  <input
                    id='username'
                    type='text'
                    className='validate'
                    ref={nameRef}
                  />
                  <label htmlFor='username'>Nombre</label>
                </div>
                <div
                  className='input-field'
                  onClick={() => setWrongValidationText(false)}
                >
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    ref={passwordRef}
                  />
                  <label htmlFor='password'>Contraseña</label>
                </div>

                <span className='red-text text-darken-4'>
                  {wrongValidationText
                    ? 'Dirección de email o contraseña incorrectas. Por favor vuelva a intentarlo.'
                    : ''}
                </span>
                <div className={classes.lowerMargin}></div>

                <button
                  className='btn waves-effect waves-light '
                  type='submit'
                  name='action'
                >
                  Iniciar Sesión
                  <i className='material-icons right'>send</i>
                </button>

                <div className={classes.upperMargin}></div>
                <div className='row'>
                  <div className='col s12'>
                    <span>¿Necesitas una cuenta?</span>
                  </div>
                  <div className='col s12 '>
                    <Link
                      className='waves-effect waves-teal btn-flat'
                      href='/Registration'
                    >
                      <span className={classes.underline}>Regístrate</span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
