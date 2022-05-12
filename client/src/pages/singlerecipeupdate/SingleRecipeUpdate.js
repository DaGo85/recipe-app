import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import RecipeService from "../../services/recipeService";
function SingleRecipe() {
  const [recipe, setRecipe] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [tags, setTags] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/update")[1];

  const navigate = useNavigate();

  // Fetching singlepost from the API
  useEffect(() => {
    const fetchedrecipe = async () => {
      const res = await RecipeService.get(path);
      setRecipe(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setDifficulty(res.data.difficulty);
      setIngredients(res.data.ingredients);
    };
    fetchedrecipe();
  }, [path]);

  const handleRecipeUpdate = () => {
    const updatedRecipe = {
      title: title,
      description: description,
      difficulty: difficulty,
      ingredients: ingredients,
      tags: tags,
    };
  };
  return (
    <main className="background-setup">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        type="range"
        min="1"
        max="10"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className=""
        required
        placeholder="Difficulty"
      />
      <ul>
        <li>tags</li>
      </ul>
      <h6>ingredients:</h6>
      <ul>
        {recipe &&
          recipe.ingredients
            .split(", ")
            .map((ingr) => <li key={ingr}>{ingr}</li>)}
      </ul>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => handleRecipeUpdate()}>update!</button>
    </main>
  );
}

export default SingleRecipe;
