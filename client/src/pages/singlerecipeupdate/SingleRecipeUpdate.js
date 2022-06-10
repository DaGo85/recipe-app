import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { tagList } from "../../assets/data";

import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";
function SingleRecipe() {
  const [recipe, setRecipe] = useState("");

  const [difficultyText, setDifficultyText] = useState("medium");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const { userCreds } = useAuthContext();

  const [addIng, setAddIng] = useState([]);

  const [tags, setTags] = useState([]);
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
      setTags(res.data.tags);
    };
    fetchedrecipe();
  }, [path]);

  const handleRecipeUpdate = async () => {
    const updatedRecipe = {
      title: title,
      description: description,
      difficulty: difficulty,
      ingredients: ingredients,
      tags: tags,
      id: recipe.id,
      username: recipe.username,
    };

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userCreds.token}`,
    };

    await RecipeService.update(recipe.title, updatedRecipe, headers).catch(
      (err) => {
        navigate("/notfound");
      }
    );
    navigate(`/recipe${title}`);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredients((prevIngredients) => [...prevIngredients, addIng]);
    setAddIng("");
  };

  const handleRemoveIngredient = (ingr) => {
    const newIngredients = ingredients.filter((rIngred) => rIngred !== ingr);
    setIngredients(newIngredients);
  };

  useEffect(() => {
    const handleDifficulty = () => {
      switch (true) {
        case difficulty > 8:
          setDifficultyText("very hard");
          break;
        case difficulty > 6:
          setDifficultyText("hard");
          break;
        case difficulty > 4:
          setDifficultyText("medium");
          break;
        case difficulty > 2:
          setDifficultyText("easy");
          break;
        case difficulty > 0:
          setDifficultyText("very easy");
          break;
        default:
          setDifficultyText("very easy");
          break;
      }
    };

    handleDifficulty();
  }, [difficulty]);

  return (
    <main className="background-setup">
      <input
        className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
          text-primaryLightContainerOn dark:text-primaryDarkContainerOn
          placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
          bg-lightVariantSurface dark:bg-darkSurface focus:border-darkOutline"
        value={title}
        onKeyDown={(e) => {
          if (e.key === "/") {
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <div className="flex flex-col text-center">
        <h2>Choose your tags</h2>
        <ul className="flex flex-wrap justify-center items-center gap-1">
          {tagList.map((tagM) => {
            return (
              <li key={tagM}>
                {tags.includes(tagM) ? (
                  <div
                    className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                     from-primaryLightContainer/75 to-[#bdeeb5] dark:from-primaryDarkContainer dark:to-[#264d26]
                     cursor-not-allowed"
                    onClick={() =>
                      setTags((prevTag) => prevTag.filter((f) => f !== tagM))
                    }
                  >
                    {tagM}
                  </div>
                ) : (
                  <div
                    className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                       dark:from-secondaryDarkContainer/40 dark:to-secondaryDarkContainer
                     cursor-crosshair"
                    onClick={() => setTags((prevTags) => [...prevTags, tagM])}
                  >
                    {tagM}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="flex flex-col gap-2 px-2 w-full">
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient}>
              <div className="flex justify-between items-center z-50 pb-2">
                {ingredient}
                <button
                  className="border rounded-3xl px-2 bg-errorLight dark:bg-errorDarkContainer border-errorLight dark:border-errorDarkContainer
                   text-errorLightOn dark:text-errorDarkContainerOn hover:bg-errorLight/60 dark:hover:bg-errorDarkContainer/60"
                  type="button"
                  onClick={() => handleRemoveIngredient(ingredient)}
                >
                  -
                </button>
              </div>
              <hr className="hr-setup" />
            </li>
          );
        })}
      </ul>
      <input
        className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
          text-primaryLightContainerOn dark:text-primaryDarkContainerOn
          placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
          bg-lightVariantSurface dark:bg-darkSurface"
        value={addIng}
        onChange={(e) => setAddIng(e.target.value)}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") {
            handleAddIngredient(e);
          }
        }}
        placeholder="Add Ingredient"
      />
      <button
        className="button-setup"
        type="button"
        onClick={(e) => handleAddIngredient(e)}
      >
        Add Ingredient
      </button>
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
      <textarea
        className="px-1 py-1 border-2 shadow-lg w-11/12 h-96 border-lightOutline dark:border-darkOutline
    text-primaryLightContainerOn dark:text-primaryDarkContainerOn
     placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
     bg-lightVariantSurface dark:bg-darkSurface"
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
