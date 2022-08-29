//Filter component to filter by difficulty

const difArray = [
  "all difficulties",
  "very easy",
  "easy",
  "medium",
  "hard",
  "very hard",
];

function RecipesFilterByDif({ dif, setDif }) {
  return (
    <div>
      <span>
        <select
          className="px-4 py-2 text-xl font-medium text-center rounded-lg bg-primaryLight dark:bg-primaryDark text-primaryLightOn dark:text-primaryDarkOn dark:border-darkOutline border-lightOutline"
          onChange={(e) => {
            setDif(e.target.value);
          }}
          value={dif}
        >
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
