import React, { useEffect, useState } from "react";
import RecipeService from "../../../services/recipeService";

function LastRecipe() {
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const fetchedrecipe = async () => {
      const res = await RecipeService.getLast();
      setRecipe(res.data);
      console.log(JSON.stringify(recipe));
    };
    fetchedrecipe();
  }, []);

  return <>LastRecipe</>;
}

export default LastRecipe;
