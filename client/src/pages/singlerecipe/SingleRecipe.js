import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import RecipeService from "../../services/recipeService";
function SingleRecipe() {
  const [recipe, setRecipe] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/recipe")[1];

  // Fetching singlepost from the API
  useEffect(() => {
    const fetchedrecipe = async () => {
      const res = await RecipeService.get(path);
      setRecipe(res.data);
    };
    fetchedrecipe();
  }, [path]);

  console.log(JSON.stringify(recipe));
  return (
    <main className="background-setup">
      <h1>{recipe.title}</h1>
      <h3>created by: {recipe.username}</h3>
      <h6>created at: {new Date(recipe.createdAt).toDateString()}</h6>
      <h6>difficulty: {recipe.difficulty}/10</h6>
      <ul>
        <li>tags</li>
      </ul>
      <ul>
        {recipe &&
          recipe.ingredients.split(", ").map((ingr) => <li>{ingr}</li>)}
      </ul>
      <section>
        <p>{recipe.description}</p>
      </section>
      <button>delete</button>
      <button>edit</button>
      <section>commentsection if logged in?</section>
    </main>
  );
}

export default SingleRecipe;
