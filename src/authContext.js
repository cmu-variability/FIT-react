// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  return (
    <AuthContext.Provider value={{ loggedInUsername, setLoggedInUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);