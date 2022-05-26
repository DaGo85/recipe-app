import React, { useState } from "react";
import RecipesFilterByDif from "./RecipesFilterByDif";
import RecipesFilterByInput from "./RecipesFilterByInput";
import RecipesFilterByTag from "./RecipesFilterByTag";

function RecipesFilter() {
  const [dif, setDif] = useState();
  const [tag, setTag] = useState();
  const [input, setInput] = useState();

  return (
    <>
      <RecipesFilterByInput input={input} setInput={setInput} />
      <RecipesFilterByTag tag={tag} setTag={setTag} />
      <RecipesFilterByDif dif={dif} setDif={setDif} />
    </>
  );
}

export default RecipesFilter;
