import React, { useEffect, useState } from "react";
import RecipeService from "../../../services/recipeService";
import { useRecipesContext } from "../../../utility/RecipesContext";

function Statistics() {
  const [facts, setFacts] = useState();
  const { recipesData } = useRecipesContext();

  useEffect(() => {
    const fetchFacts = async () => {
      const res = await RecipeService.facts();
      setFacts(res.data);
    };

    fetchFacts();
  }, [recipesData]);

  return (
    <section className="">
      <h2>Some random Facts about Reciper and its Users:</h2>
      {facts &&
        facts.map((f) => {
          return (
            <div key={f.text}>
              {f.text}
              {f.fact}
            </div>
          );
        })}
    </section>
  );
}

export default Statistics;
