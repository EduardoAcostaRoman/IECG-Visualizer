function Registration() {
  return (
    <div className='row'>
      <form className='col s12'>
        <h1>Registro</h1>
        <div className='row'>
          <div className='input-field col s6'>
            <input id='first_name' type='text' className='validate' />
            <label className='active' htmlFor='first_name'>
              Nombre
            </label>
          </div>

          <div className='input-field col s12'>
            <input id='email' type='email' className='validate' />
            <label className='active' htmlFor='email'>
              Correo Electrónico
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input id='password' type='password' class='validate' />
            <label htmlFor='password'>Contraseña</label>
          </div>
        </div>

        <button>Log in</button>
      </form>
    </div>
  );
}

export default Registration;
