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
  console.log("facts:" + facts);
  return (
    <section className="">
      <h2>Some random Facts about Reciper and its Users:</h2>
      {facts &&
        facts.map((f) => {
          return (
            <p key={f.text}>
              {f.text}
              {f.fact} {f.text2 && f.text2}
              {f.fact2 && f.fact2}
            </p>
          );
        })}
    </section>
  );
}

export default Statistics;
