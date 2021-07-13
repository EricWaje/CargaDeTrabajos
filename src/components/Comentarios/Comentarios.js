import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../firebase/firebase';
import Comentario from './Comentario';

const Comentarios = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection('comentarios')
      .orderBy('createdAt', 'desc')
      .get()
      .then((snap) => {
        const comentario = snap.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          const { createdAt } = data;
          const date = new Date(createdAt.seconds * 1000);
          const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES').format(
            date
          );
          return {
            ...data,
            id,
            createdAt: normalizedCreatedAt,
          };
        });
        setComment(comentario);
      });
  }, []);

  return (
    <div className="col-lg-5 p-0 contenedor-comentarios">
      <div className="titulo">
        <h2>Comentarios</h2>
      </div>
      {comment.map((comm) => (
        <Comentario key={comm.id} {...comm} />
      ))}
    </div>
  );
};

export default Comentarios;
