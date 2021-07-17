import React from 'react';
import { Link } from 'react-router-dom';
import Comentarios from '../Comentarios/Comentarios';
import './Proyectos.css';

const Proyectos = () => {
  return (
    <div className="soloComentarios">
      <Comentarios />
      <Link className="volver" to={'/'}>
        Volver al Home
      </Link>
    </div>
  );
};

export default Proyectos;
