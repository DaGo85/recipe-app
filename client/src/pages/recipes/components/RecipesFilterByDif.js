import React from "react";
import { useRecipesContext } from "../../../utility/RecipesContext";

function RecipesFilterByDif({ dif, setDif }) {
  const difArray = ["all", "very easy", "easy", "medium", "hard", "very hard"];
  const { setRecipesFilter } = useRecipesContext();

  const handleSelect = (e) => {
    setRecipesFilter((prevValue) => ({
      ...prevValue,
      difficulty: e.target.value,
    }));
  };

  return (
    <div>
      <span>
        <select onChange={handleSelect}>
          {difArray.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}

export default RecipesFilterByDif;
