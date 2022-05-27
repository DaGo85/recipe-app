import React, { useState } from "react";
import RecipesFilterByDif from "./RecipesFilterByDif";
import RecipesFilterByInput from "./RecipesFilterByInput";
import RecipesFilterByTag from "./RecipesFilterByTag";

function RecipesFilter({ filter, setFilter }) {
  const [dif, setDif] = useState();
  const [tag, setTag] = useState([]);
  const [input, setInput] = useState();

  const handleFilter = () => {
    setFilter({
      difficulty: dif,
      tags: tag,
      input: input,
    });
  };
  console.log("tags:" + tag);
  return (
    <>
      <RecipesFilterByInput input={input} setInput={setInput} />
      <RecipesFilterByTag tag={tag} setTag={setTag} />
      <RecipesFilterByDif dif={dif} setDif={setDif} />
      <button onClick={() => handleFilter()}></button>
    </>
  );
}

export default RecipesFilter;
