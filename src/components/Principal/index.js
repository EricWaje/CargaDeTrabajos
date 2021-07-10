import React from 'react';

import Comentarios from '../Comentarios/Comentarios';
import Form from '../Form/Form';
import Footer from '../Footer';

const Principal = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <Form />
          <Comentarios />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Principal;
