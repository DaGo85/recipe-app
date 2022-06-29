//Context for register

import { useState, useContext, createContext } from "react";

// Creates Context

const RegContext = createContext(null);

// Context Provider

const RegProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [reset, setReset] = useState(false);

  return (
    <RegContext.Provider
      value={{
        register,
        setRegister,
        isOpen,
        setIsOpen,
        login,
        setLogin,
        reset,
        setReset,
      }}
    >
      {children}
    </RegContext.Provider>
  );
};

// Custom hook for consuming Context

const useRegContext = () => {
  return useContext(RegContext);
};

export { RegProvider, RegContext, useRegContext };
