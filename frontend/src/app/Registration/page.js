'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

function Registration() {
  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitUser = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    axios
      .post('http://localhost:4000/users', {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      })
      .then((response) => {
        console.log(response);
        alert(`Bienvenido ${enteredName}, has sido registrado con éxito!`);
        router.push('/Login');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 l3 offset-m3'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Registro</span>
              <form onSubmit={submitUser}>
                <div className='input-field'>
                  <input
                    id='username'
                    type='text'
                    className='validate'
                    required
                    ref={nameRef}
                  />
                  <label htmlFor='username'>Nombre</label>
                </div>
                <div className='input-field'>
                  <input
                    id='email'
                    type='email'
                    className='validate'
                    required
                    ref={emailRef}
                  />
                  <label htmlFor='email'>Correo Electrónico</label>
                </div>
                <div className='input-field'>
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    required
                    ref={passwordRef}
                  />
                  <label htmlFor='password'>Contraseña</label>
                </div>

                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                >
                  Continuar
                  <i className='material-icons right'>send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
