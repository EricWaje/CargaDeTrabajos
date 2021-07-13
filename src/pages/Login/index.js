import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import { AiFillGithub } from 'react-icons/ai';
import firebase from 'firebase/app';

const Login = () => {
  const history = useHistory();

  const iniciarSesion = async () => {
    const github = new firebase.auth.GithubAuthProvider();
    await firebase
      .auth()
      .signInWithPopup(github)
      .then(() => {
        history.push('/home');
      });
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center align-content-center"
        style={{ height: '100vh' }}
      >
        <div className="col-lg-5 d-flex flex-column align-items-center align-content-center">
          <h2 className="text-center">Bienvenid@! 😎</h2>
          <button onClick={iniciarSesion} className="mt-4 boton">
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
