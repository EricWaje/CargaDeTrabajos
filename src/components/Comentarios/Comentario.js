import React, { useContext } from 'react';
import './Comentario.css';
import { UserContext } from '../../context/UserContext';

const Comentario = ({ avatar, content, createdAt, userId, username, link }) => {
  const { nombre } = useContext(UserContext);
  return (
    <div className="d-flex flex-row align-content-center contenedor-comentario">
      <img src={avatar} alt="avatar" className="avatar-comentario" />
      <div className="d-flex flex-column">
        <div className="d-flex flex-row align-items-center align-content-center">
          {nombre?.length > 0 && (
            <h3 className="username-comentario">{nombre}</h3>
          )}

          <span className="fecha">~ {createdAt} ~</span>
        </div>
        <div>
          <a className="link" href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
          <p className="content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comentario;
