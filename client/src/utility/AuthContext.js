//Context for authentification

import { useState, useContext, createContext } from "react";

// Creates Context

const AuthContext = createContext(null);

// Context Provider

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userCreds, setUserCreds] = useState(null);

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, userCreds, setUserCreds }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming Context

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuthContext };
