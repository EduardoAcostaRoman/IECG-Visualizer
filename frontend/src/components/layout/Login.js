import classes from './Login.module.css';

function Login() {
  return (
    <div className={classes.frame}>
      <h1 className={classes.title}>Inicio de sesión</h1>
      <form className={classes.form}>
        <div className='input'>
          <label for='name'>Nombre: </label>
          <input id='name' type='text' placeholder='Tu nombre aquí...' />
        </div>
        <div className='input'>
          <label for='lastNameP'>Apellido paterno: </label>
          <input
            id='lastNameP'
            type='text'
            placeholder='Tu apellido paterno...'
          />
        </div>
        <div className='input'>
          <label for='lastNameM'>Apellido materno: </label>
          <input
            id='lastNameM'
            type='text'
            placeholder='Tu apellido materno...'
          />
        </div>
        <div className='input'>
          <label for='mail'>Correo electrónico: </label>
          <input id='mail' type='text' placeholder='Tu correo electrónico...' />
        </div>

        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
