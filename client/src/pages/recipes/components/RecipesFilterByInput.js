function RecipesFilterByInput({ input, setInput }) {
  return (
    <input
      value={input}
      className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
          text-primaryLightContainerOn dark:text-primaryDarkContainerOn
          placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
          bg-lightVariantSurface dark:bg-darkSurface"
      type="text"
      placeholder="Please enter one or more filters"
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default RecipesFilterByInput;
