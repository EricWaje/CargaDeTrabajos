import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../firebase/firebase';
import Comentario from './Comentario';

const Comentarios = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection('comentarios')
      .get()
      .then((snapshot) => {
        const comentario = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return {
            ...data,
            id,
          };
        });
        setComment(comentario);
        console.log(comentario);
      });
  }, []);

  return (
    <>
      <Comentario comment={comment} />
    </>
  );
};

export default Comentarios;
