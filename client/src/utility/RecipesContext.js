//Context for recipes

import { useState, useContext, createContext } from "react";

// Creates Context

const RecipesContext = createContext(null);

// Context Provider

const RecipesProvider = ({ children }) => {
  const [recipesData, setRecipesData] = useState([]);
  const [recipesFilter, setRecipesFilter] = useState({
    difficulty: "all",
    tags: [],
    input: "",
  });

  return (
    <RecipesContext.Provider
      value={{ recipesData, setRecipesData, recipesFilter, setRecipesFilter }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

// Custom hook for consuming Context

const useRecipesContext = () => {
  return useContext(RecipesContext);
};

export { RecipesProvider, RecipesContext, useRecipesContext };
