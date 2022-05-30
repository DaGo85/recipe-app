import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeService from "../../../services/recipeService";

function LastRecipe() {
  const [recipe, setRecipe] = useState([]);
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

  return (
    <>
      {recipe ? (
        <section onClick={() => handleLink()}>
          <h3>Our last Recipe:</h3>
          {recipe.images && (
            <img src={recipe.images[0]} alt="first img of newest recipe" />
          )}
          <h4>{recipe.title}</h4>
          <h5>from {recipe.username}</h5>
          <h5>created at: {recipe.createdAt}</h5>
          <p>
            {recipe.desc}
            <br />
            {recipe.difficulty}
          </p>
        </section>
      ) : (
        <section>placeholder</section>
      )}
    </>
  );
}

export default LastRecipe;
