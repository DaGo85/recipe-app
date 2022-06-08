import React, { useState } from "react";
import { tagList } from "../../../assets/data";
import RecipesFilterByDif from "./RecipesFilterByDif";
import RecipesFilterByInput from "./RecipesFilterByInput";
import RecipesFilterByTag from "./RecipesFilterByTag";

function RecipesFilter({ filter, setFilter }) {
  const [dif, setDif] = useState("all");
  const [tag, setTag] = useState(tagList);
  const [input, setInput] = useState("");

  return (
    <>
      <RecipesFilterByInput input={input} setInput={setInput} />
      <RecipesFilterByTag tag={tag} setTag={setTag} />
      <RecipesFilterByDif setDif={setDif} />
      <button
        className="button-setup"
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
    </>
  );
}

export default RecipesFilter;
