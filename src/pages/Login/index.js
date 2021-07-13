import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import { AiFillGithub } from 'react-icons/ai';
import firebase from 'firebase/app';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { traerNombre } = useContext(UserContext);
  const history = useHistory();

  const iniciarSesion = () => {
    const github = new firebase.auth.GithubAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(github)
      .then((user) => {
        const { additionalUserInfo } = user;
        const { username: nombreDeUser } = additionalUserInfo;
        traerNombre(nombreDeUser);
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
          <p className="text-center mt-2">
            Acá van a poder dejar el link de su web y ver los sitios de sus
            compañer@s 🤟{' '}
          </p>
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
