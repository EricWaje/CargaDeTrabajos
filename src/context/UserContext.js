import React, { useState, useEffect } from 'react';
import { getFirebase } from '../firebase/firebase';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fire = getFirebase();

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
