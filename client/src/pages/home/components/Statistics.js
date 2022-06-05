import React, { useEffect, useState } from "react";
import { statisticsSvg } from "../../../assets/data";
import RecipeService from "../../../services/recipeService";
import { useRecipesContext } from "../../../utility/RecipesContext";
import StatisticsFact from "./StatisticsFact";

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
    <section className="flex flex-wrap justify-center items-center m-[-16px]">
      {facts &&
        facts.map((f, i) => {
          return <StatisticsFact fact={f} icon={statisticsSvg[i]} />;
        })}
    </section>
  );
}

export default Statistics;
