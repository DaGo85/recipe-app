import React from "react";

function RecipesFilterByDif({ dif, setDif }) {
  const difArray = ["all", "very easy", "easy", "medium", "hard", "very hard"];

  return (
    <div>
      <span>
        <select onChange={(e) => setDif(e)}>
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
