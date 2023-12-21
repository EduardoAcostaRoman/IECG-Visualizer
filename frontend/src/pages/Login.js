import classes from './Login.module.css'; //--> to delete due to materialize styles
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

let activate = false;

function Login() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div class='row'>
      <div class='col s12 m6'>
        <div class='card'>
          <div class='card-image'>
            <img src='images/circuito 1.jpg' />
            <span class='card-title' id={classes.outline}>
              IECG Visualizer
            </span>
          </div>
          <div class='card-content'>
            <span class='card-title'>Inicio de Sesión</span>
            <div className='row'>
              <form className='col s12'>
                <div className='row'>
                  <div className='input-field col s6'>
                    <input
                      id='first_name'
                      type='text'
                      className='validate'
                      onFocus={() => {
                        setIsFocused != isFocused;
                        activate = true;
                      }}
                    />
                    <label className={activate} htmlFor='first_name'>
                      Nombre
                    </label>
                  </div>
                  <div className='input-field col s6'>
                    <input id='last_name' type='text' className='validate' />
                    <label className='active' htmlFor='last_name'>
                      Apellido Paterno
                    </label>
                  </div>
                  <div className='input-field col s6'>
                    <input id='last_name2' type='text' className='validate' />
                    <label className='active' htmlFor='last_name2'>
                      Apellido Materno
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <input id='email' type='email' className='validate' />
                    <label className='active' htmlFor='email'>
                      Correo Electrónico
                    </label>
                  </div>
                </div>
                <div class='row'>
                  <div class='input-field col s12'>
                    <input id='password' type='password' class='validate' />
                    <label htmlFor='password' className='active'>
                      Contraseña
                    </label>
                  </div>
                </div>

                <div className='row'>
                  <div className='row'>
                    <span className='card-title'>¿Nuevo aquí?</span>
                  </div>
                  <button
                    className='btn waves-effect waves-light'
                    type='button'
                    name='action'
                    onClick={() => router.push('/Registration')}
                  >
                    Registarse
                    <i className='material-icons right'>send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className='row'>
    //   <div className='col s12 m6'>
    //     <div className='card blue-grey lighten-5'>
    //       <div className='card-content'>
    //         <div className='row'>
    //           <form className='col s12'>
    //             <div className='row'>
    //               <span className='card-title'>INICIO DE SESIÓN</span>
    //             </div>
    //             <div className='row '>
    //               <div className='input-field col s12'>
    //                 <input id='email' type='email' className='validate' />
    //                 <label className='active' htmlFor='email'>
    //                   Correo Electrónico
    //                 </label>
    //               </div>
    //             </div>
    //             <div className='row'>
    //               <div className='input-field col s12'>
    //                 <input id='password' type='password' className='validate' />
    //                 <label className='active' htmlFor='password'>
    //                   Contraseña
    //                 </label>
    //               </div>
    //             </div>
    //             <div className='row'>
    //               <button
    //                 className='btn waves-effect waves-light'
    //                 type='submit'
    //                 name='action'
    //               >
    //                 Entrar
    //                 <i className='material-icons right'>send</i>
    //               </button>
    //             </div>

    //             <div className='row'>
    //               <div className='row'>
    //                 <span className='card-title'>¿Nuevo aquí?</span>
    //               </div>
    //               <button
    //                 className='btn waves-effect waves-light'
    //                 type='button'
    //                 name='action'
    //                 onClick={() => router.push('/Registration')}
    //               >
    //                 Registarse
    //                 <i className='material-icons right'>send</i>
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
