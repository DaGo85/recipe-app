import React, { useState } from "react";
import RecipesFilterByDif from "./RecipesFilterByDif";
import RecipesFilterByInput from "./RecipesFilterByInput";
import RecipesFilterByTag from "./RecipesFilterByTag";

function RecipesFilter({ filter, setFilter }) {
  const [dif, setDif] = useState("all");
  const [tag, setTag] = useState(["a", "b", "c", "d", "e"]);
  const [input, setInput] = useState("");
  const [tagMock, setTagMock] = useState(["a", "b", "c", "d", "e"]);

  const handleFilter = () => {
    setFilter({
      difficulty: dif,
      tags: tag,
      input: input,
    });
  };

  return (
    <>
      <RecipesFilterByInput input={input} setInput={setInput} />
      {tagMock && (
        <RecipesFilterByTag
          tag={tag}
          setTag={setTag}
          tagMock={tagMock}
          setTagMock={setTagMock}
        />
      )}
      <RecipesFilterByDif dif={dif} setDif={setDif} />
      <button onClick={() => handleFilter()}>filter</button>
    </>
  );
}

export default RecipesFilter;
