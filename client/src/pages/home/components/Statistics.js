//Statistic component, gets 3 random facts about the app from the BE

import { useEffect, useState } from "react";

import { statisticsSvg } from "../../../assets/data";
import RecipeService from "../../../services/recipeService";
import { motion } from "framer-motion";

import StatisticsFact from "./StatisticsFact";
import SkeletonFact from "../../../skeletons/SkeletonFact";

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

function Statistics() {
  const [facts, setFacts] = useState();

  useEffect(() => {
    const fetchFacts = async () => {
      const res = await RecipeService.facts();
      setFacts(res.data);
    };

    fetchFacts();
  }, []);

  return (
    <section className="flex flex-wrap justify-center items-center mt-[-16px]">
      {facts ? (
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
        })
      ) : (
        <>
          <SkeletonFact />
          <SkeletonFact />
          <SkeletonFact />
        </>
      )}
    </section>
  );
}

export default Statistics;
