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
      <h2>Facts:</h2>
      {facts &&
        facts.map((f) => {
          return (
            <>
              <p key={f.text}>
                {f.text}
                {f.fact} {f.text2 && f.text2}
                {f.fact2 && f.fact2}
              </p>
            </>
          );
        })}
    </section>
  );
}

export default Statistics;
