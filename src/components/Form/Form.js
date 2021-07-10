import React, { useContext } from 'react';
import './Form.css';
import { UserContext } from '../../context/UserContext';

const Form = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="col-lg-5">
      <h2 className="avatar">avatar</h2>
      <h2 className="userName">username</h2>
      <div className="d-flex flex-column justify-content-start align-content-center">
        <form onSubmit={submitForm}>
          <textarea placeholder="Pegá el link de tu sitio y dejá algún comentario..."></textarea>
          <button className="compartir">Compartir</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
