import React, { useState, useEffect } from 'react';
import { getFirebase } from '../firebase/firebase';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [nombre, setNombre] = useState('');
  //const [nombreDeUsuario, setNombreDeUsuario] = useState('')

  const fire = getFirebase();

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    // eslint-disable-next-line
  }, []);

  const traerNombre = (u) => {
    setNombre(u);
  };

  return (
    <UserContext.Provider value={{ user, traerNombre, nombre }}>
      {children}
    </UserContext.Provider>
  );
};
