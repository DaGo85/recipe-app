//Button for getting random recipe

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useRecipesContext } from "../../../utility/RecipesContext";

import WiggleButton from "../../../components/elements/WiggleButton";

function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  const { recipesData } = useRecipesContext();

  useEffect(() => {
    const rndRecipe = [
      recipesData[Math.floor(Math.random() * recipesData.length)],
    ];

    setRandomRecipe(rndRecipe[0]);
  }, [recipesData]);

  return (
    <>
      {randomRecipe && (
        <Link
          to={`/recipe${randomRecipe.title}`}
          className="flex flex-col items-center gap-2"
        >
          <WiggleButton
            label="leading to a page with a random recipe"
            viewBox="0 0 320 512"
            svg="M204.3 32.01H96c-52.94 0-96 43.06-96 96c0 17.67 14.31 31.1 32 31.1s32-14.32 32-31.1c0-17.64 14.34-32 32-32h108.3C232.8 96.01 256 119.2 256 147.8c0 19.72-10.97 37.47-30.5 47.33L127.8 252.4C117.1 258.2 112 268.7 112 280v40c0 17.67 14.31 31.99 32 31.99s32-14.32 32-31.99V298.3L256 251.3c39.47-19.75 64-59.42 64-103.5C320 83.95 268.1 32.01 204.3 32.01zM144 400c-22.09 0-40 17.91-40 40s17.91 39.1 40 39.1s40-17.9 40-39.1S166.1 400 144 400z"
          />
          <h3>Press for random Recipe!</h3>
        </Link>
      )}
    </>
  );
}

export default RandomRecipe;
