import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeService from "../../../services/recipeService";
import imgMock from "../../../assets/test.jpg";

function LastRecipe() {
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedrecipe = async () => {
      const res = await RecipeService.getLast();
      setRecipe(res.data[0]);
    };

    fetchedrecipe();
  }, []);

  const handleLink = () => {
    navigate(`/recipe${recipe.title}`);
  };

  console.log("lastrecipe:" + JSON.stringify(recipe));

  return (
    <>
      <h2>Our last Recipe:</h2>
      {recipe ? (
        <section className="last-recipe-card" onClick={() => handleLink()}>
          <h3>{recipe.title}</h3>
          <img className="" src={imgMock} alt="from recipe" />
          <div className="flex flex-col gap-1">
            <h5>
              created by:
              <br />
              <span className="highlight-gradient">{recipe.username}</span>
            </h5>
            <h5>
              created at: <br />
              <span className="highlight-gradient">{recipe.createdAt}</span>
            </h5>
          </div>
          <div>
            <p className="text-[1.17em]">
              {recipe.tags.map((t) => {
                return (
                  <span
                    key={t}
                    className="text-lg font-bold highlight-gradient"
                  >
                    {t}
                  </span>
                );
              })}
              <br />
              <br />
              Difficulty: {recipe.difficulty}/10
            </p>
          </div>
        </section>
      ) : (
        <section>placeholder</section>
      )}
    </>
  );
}

export default LastRecipe;
