import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import { AiFillGithub } from 'react-icons/ai';
import { login } from '../../firebase/firebase';

const Login = () => {
  const history = useHistory();

  const loginGithub = () => {
    login();
    history.push('/home');
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center align-content-center"
        style={{ height: '100vh' }}
      >
        <div className="col-lg-5 d-flex flex-column align-items-center align-content-center">
          <h2 className="text-center">Bienvenid@!</h2>
          <button onClick={loginGithub} className="mt-4 boton">
            {' '}
            <span>
              <AiFillGithub size={'2em'} />
            </span>
            Iniciar sesión con Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
