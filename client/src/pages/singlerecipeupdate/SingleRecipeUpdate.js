import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import RecipeService from "../../services/recipeService";
function SingleRecipe() {
  const [recipe, setRecipe] = useState("");

  const [difficultyText, setDifficultyText] = useState("medium");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
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
      setIngredients(res.data.ingredients.split(", "));
    };
    fetchedrecipe();
  }, [path]);

  const handleRecipeUpdate = () => {
    const updatedRecipe = {
      title: title,
      description: description,
      difficulty: difficulty,
      ingredients: ingredients.join(", "),
      tags: tags,
    };

    RecipeService.update(path, updatedRecipe).then(navigate(`/recipe${path}`));
  };

  const handleAddIngredient = () => {
    if (!ingredient) {
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    setIngredient("");
  };

  const handleRemoveIngredient = (ingr) => {
    const newIngredients = ingredients.filter((rIngred) => rIngred !== ingr);
    setIngredients(newIngredients);
  };

  useEffect(() => {
    const handleDifficulty = () => {
      if (difficulty > 8) return setDifficultyText("very hard");
      if (difficulty > 6) return setDifficultyText("hard");
      if (difficulty > 4) return setDifficultyText("medium");
      if (difficulty > 2) return setDifficultyText("easy");
      if (difficulty > 0) return setDifficultyText("very easy");
    };
    handleDifficulty();
  }, [difficulty]);

  return (
    <main className="background-setup">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>
        <h4>
          Difficulty: {difficulty}/10 {difficultyText}
        </h4>
        <input
          type="range"
          min="1"
          max="10"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="slider-button"
          required
          placeholder="Difficulty"
        />
      </div>
      <ul>
        <li>tags</li>
      </ul>
      <div>
        ingredients:
        <ul>
          {ingredients &&
            ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>
                  {ingredient}
                  <button onClick={() => handleRemoveIngredient(ingredient)}>
                    remove
                  </button>
                </li>
              );
            })}
          <li>
            <input
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </li>
        </ul>
        <button onClick={() => handleAddIngredient()}>
          add this ingredient+++
        </button>
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button-setup" onClick={() => handleRecipeUpdate()}>
        update!
      </button>
    </main>
  );
}

export default SingleRecipe;
