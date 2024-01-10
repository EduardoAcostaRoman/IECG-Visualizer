import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Login() {
  const router = useRouter();
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.id === 'username') {
      if (e.target.value === '') {
        setIsFocusedUsername(false);
      } else {
        setIsFocusedUsername(true);
      }
    }

    if (e.target.id === 'password') {
      if (e.target.value === '') {
        setIsFocusedPassword(false);
      } else {
        setIsFocusedPassword(true);
      }
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Iniciar sesión</span>
              <form>
                <div className='input-field'>
                  <input
                    id='username'
                    type='text'
                    className='validate'
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor='username'
                    className={isFocusedUsername ? 'active' : ''}
                  >
                    Nombre
                  </label>
                </div>
                <div className='input-field'>
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor='password'
                    className={isFocusedPassword ? 'active' : ''}
                  >
                    Contraseña
                  </label>
                </div>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                  onClick={() => router.push('/Registration')}
                >
                  Iniciar sesión
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

export default Login;
