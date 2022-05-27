import React from "react";

function RecipesFilterByInput({ input, setInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Please enter one or more filters"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default RecipesFilterByInput;
