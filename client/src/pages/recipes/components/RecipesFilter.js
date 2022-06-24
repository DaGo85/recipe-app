import { useState } from "react";
import RecipesFilterByDif from "./RecipesFilterByDif";
import RecipesFilterByInput from "./RecipesFilterByInput";
import RecipesFilterByTag from "./RecipesFilterByTag";

function RecipesFilter({ setFilter, setCurrentPage }) {
  const [dif, setDif] = useState("all");
  const [tag, setTag] = useState([]);
  const [input, setInput] = useState("");

  const resetFilter = () => {
    setDif("all");
    setTag([]);
    setInput("");
    setFilter({
      difficulty: "all",
      tags: [],
      input: "",
    });
    setCurrentPage(1);
  };

  return (
    <>
      <RecipesFilterByInput
        input={input}
        setInput={setInput}
        setFilter={setFilter}
      />
      <RecipesFilterByTag tag={tag} setTag={setTag} />{" "}
      <span className="flex flex-col gap-2 md:flex-row md:gap-4 mb-6">
        <RecipesFilterByDif dif={dif} setDif={setDif} />

        <button onClick={() => resetFilter()} className="delete-button-setup">
          Reset Filter
        </button>
        <button
          className="button-setup px-10"
          onClick={() => {
            setFilter({
              difficulty: dif,
              tags: tag,
              input: input,
            });
            setCurrentPage(1);
          }}
        >
          Filter
        </button>
      </span>
    </>
  );
}

export default RecipesFilter;
