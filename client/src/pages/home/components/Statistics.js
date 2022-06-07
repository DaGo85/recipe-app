import React, { useEffect, useState } from "react";
import { statisticsSvg } from "../../../assets/data";
import RecipeService from "../../../services/recipeService";
import { useRecipesContext } from "../../../utility/RecipesContext";
import StatisticsFact from "./StatisticsFact";
import { motion } from "framer-motion";

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

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: -30,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="flex flex-wrap justify-center items-center mt-[-16px]">
      {facts &&
        facts.map((f, i) => {
          return (
            <motion.div
              key={f.keyword + f.fact}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <StatisticsFact fact={f} icon={statisticsSvg[i]} />
            </motion.div>
          );
        })}
    </section>
  );
}

export default Statistics;
