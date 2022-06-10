import React, { useState } from "react";
import RecipesFilterByDif from "./RecipesFilterByDif";
import RecipesFilterByInput from "./RecipesFilterByInput";
import RecipesFilterByTag from "./RecipesFilterByTag";

function RecipesFilter({ filter, setFilter }) {
  const [dif, setDif] = useState("all");
  const [tag, setTag] = useState([]);
  const [input, setInput] = useState("");

  const resetFilter = () => {
    setDif("all");
    setTag([]);
    setInput("");
  };

  return (
    <>
      <RecipesFilterByInput input={input} setInput={setInput} />
      <RecipesFilterByTag tag={tag} setTag={setTag} />
      <RecipesFilterByDif dif={dif} setDif={setDif} />
      <span className="flex flex-col gap-2 md:flex-row md:gap-4">
        <button onClick={() => resetFilter()} className="delete-button-setup">
          Reset filter
        </button>
        <button
          className="button-setup mb-4"
          onClick={() =>
            setFilter({
              difficulty: dif,
              tags: tag,
              input: input,
            })
          }
        >
          Filter
        </button>
      </span>
    </>
  );
}

export default RecipesFilter;
