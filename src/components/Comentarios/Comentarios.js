import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../firebase/firebase';
import Comentario from './Comentario';

const Comentarios = () => {
  const [comment, setComment] = useState([]);

  const mostrarComentarios = async () => {
    const db = getFirestore();
    await db
      .collection('comentarios')
      .orderBy('createdAt', 'desc')
      .get()
      .then((snap) => {
        const comentario = snap.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          const { createdAt } = data;
          const date = new Date(createdAt.seconds * 1000);
          const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
            dateStyle: 'full',
            timeStyle: 'short',
          }).format(date);
          return {
            ...data,
            id,
            createdAt: normalizedCreatedAt,
          };
        });
        setComment(comentario);
      });
  };

  useEffect(() => {
    mostrarComentarios();
  }, []);

  return (
    <div className="col-lg-5 p-0 contenedor-comentarios">
      <div className="titulo">
        <h2>Comentarios</h2>
        <button className="actualizar" onClick={mostrarComentarios}>
          Actualizar Feed
        </button>
      </div>
      {comment.map((comm) => (
        <Comentario key={comm.id} {...comm} />
      ))}
    </div>
  );
};

export default Comentarios;
