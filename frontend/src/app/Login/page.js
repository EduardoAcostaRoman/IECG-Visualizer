'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function Login() {
  const router = useRouter();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Iniciar sesión</span>
              <form>
                <div className='input-field'>
                  <input id='username' type='text' className='validate' />
                  <label htmlFor='username'>Nombre</label>
                </div>
                <div className='input-field'>
                  <input id='password' type='password' className='validate' />
                  <label htmlFor='password'>Contraseña</label>
                </div>
                <Link href='/Registration'>
                  <button
                    className='btn waves-effect waves-light'
                    type='submit'
                    name='action'
                  >
                    Iniciar sesión
                    <i className='material-icons right'>send</i>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
