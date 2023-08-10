import classes from './Login.module.css';
import { useState } from 'react';

function Login() {
  return (
    <div className='row'>
      <div className='col s12 m6'>
        <div className='card blue-grey lighten-5'>
          <div className='card-content'>
            <div className='row'>
              <form className='col s12'>
                <div className='row'>
                  <span className='card-title'>INICIO DE SESIÓN</span>
                </div>
                <div className='row '>
                  <div className='input-field col s12'>
                    <input id='email' type='email' className='validate' />
                    <label className='active' htmlFor='email'>
                      Correo Electrónico
                    </label>
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <input id='password' type='password' className='validate' />
                    <label className='active' htmlFor='password'>
                      Password
                    </label>
                  </div>
                </div>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                >
                  Entrar
                  <i className='material-icons right'>send</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className='row'>
    //   <div className='col s12 m5'>
    //     <div className='card-panel blue-grey lighten-5'>
    //       <div className='row'>
    //         <form className='col s12'>
    //           <div className='row '>
    //             <span className='card-title'>INICIO DE SESIÓN</span>
    //           </div>
    //           <div className='row '>
    //             <div className='input-field col s12'>
    //               <input id='email' type='email' className='validate' />
    //               <label className='active' htmlFor='email'>
    //                 Correo Electrónico
    //               </label>
    //             </div>
    //           </div>
    //           <div className='row'>
    //             <div className='input-field col s12'>
    //               <input id='password' type='password' className='validate' />
    //               <label className='active' htmlFor='password'>
    //                 Password
    //               </label>
    //             </div>
    //           </div>
    //           <button
    //             className='btn waves-effect waves-light'
    //             type='submit'
    //             name='action'
    //           >
    //             Entrar
    //             <i className='material-icons right'>send</i>
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
