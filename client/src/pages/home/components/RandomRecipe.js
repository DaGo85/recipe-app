import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RandomRecipe({ recipesData }) {
  const [randomRecipe, setRandomRecipe] = useState(null);
  console.log("recipesall" + JSON.stringify(recipesData));

  useEffect(() => {
    const rndRecipe = [
      recipesData[Math.floor(Math.random() * recipesData.length)],
    ];
    setRandomRecipe(rndRecipe[0]);
  }, [recipesData]);

  return (
    <>
      {randomRecipe && (
        <Link to={`/recipe${randomRecipe.title}`}>{randomRecipe.title}</Link>
      )}
    </>
  );
}

export default RandomRecipe;
