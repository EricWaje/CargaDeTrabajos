import React, { useContext, useState } from 'react';
import './Form.css';
import { UserContext } from '../../context/UserContext';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';

const Form = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleChangee = (e) => {
    const { value } = e.target;
    setLink(value);
  };

  /* AGREGANDO COLECCION A FIREBASE */
  const submitForm = async (e) => {
    let form = e.target;
    e.preventDefault();
    setLoading(false);
    const db = getFirestore();
    await db
      .collection('comentarios')
      .add({
        avatar: user.photoURL,
        username: user.displayName,
        content: text,
        link: link,
        userId: user.uid,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then(() => {
        setText('');
        setLink('');
      })
      .finally(() => {
        setLoading(true);
        form.reset();
      });
  };
  /*FIN AGREGANDO COLECCION A FIREBASE */

  const logout = async () => {
    await firebase.auth().signOut;
    history.push('/');
  };

  return (
    <>
      {user && (
        <div className="col-lg-5">
          <img className="avatar" src={user.photoURL} alt="avatar" />
          <h2 className="userName">{user.displayName}</h2>
          <div className="d-flex flex-column justify-content-start align-content-center">
            <form onSubmit={submitForm}>
              <input
                onChange={handleChangee}
                className="mt-3 mb-3"
                type="text"
                placeholder="Pegá el link de tu sitio"
              />
              <textarea
                onChange={handleChange}
                placeholder="Dejá algún comentario..."
                value={text}
              ></textarea>
              {loading ? (
                <button
                  disabled={text.length === 0 || link.length === 0}
                  className="compartir mt-3 mb-3"
                >
                  Compartir
                </button>
              ) : (
                <div className="spinner mt-3 mb-3"></div>
              )}
            </form>
          </div>
          <button className="cerrar" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      )}
    </>
  );
};

export default Form;
