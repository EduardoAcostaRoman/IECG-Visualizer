import classes from './Login.module.css';

function Login() {
  return (
    <div className={classes.frame}>
      <h1 className={classes.title}>Inicio de sesión</h1>
      <form className={classes.form}>
        <div class='row'>
          <form class='col s12'>
            <div class='row'>
              <div class='input-field col s6'>
                <input id='first_name' type='text' class='validate' />
                <label for='first_name'>First Name</label>
              </div>
              <div class='input-field col s6'>
                <input id='last_name' type='text' class='validate' />
                <label for='last_name'>Last Name</label>
              </div>
            </div>
            {/* <div class='row'>
              <div class='input-field col s12'>
                <input id='password' type='password' class='validate' />
                <label for='password'>Password</label>
              </div>
            </div> */}
            <div class='row'>
              <div class='input-field col s12'>
                <input id='email' type='email' class='validate' />
                <label for='email'>Email</label>
              </div>
            </div>
          </form>
        </div>
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
