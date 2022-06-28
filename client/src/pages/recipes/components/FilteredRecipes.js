//Filtered recipes grid

import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import HighlightText from "../../../components/elements/HighlightText";

function FilteredRecipes({ currentGridData }) {
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
    <AnimatePresence>
      <section className="flex flex-wrap justify-center items-center">
        {currentGridData.map((d, i) => {
          return (
            <Link to={`/recipe${d.title}`} key={d.title}>
              <motion.div
                className="recipe-card cursor-pointer"
                key={d.title}
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 * i }}
              >
                <h2 className="font-bold">{d.title}</h2>
                <div className="flex flex-col gap-1">
                  <h3>
                    created by:
                    <br />
                    <HighlightText text={d.username} />
                  </h3>
                  <h3>
                    created at: <br />
                    <HighlightText
                      text={new Date(d.createdAt).toDateString()}
                    />
                  </h3>
                </div>
                <p className="text-[1.17em] flex flex-wrap gap-1 items-center justify-center">
                  {d.tags.map((t) => {
                    return (
                      <HighlightText
                        key={t}
                        text={t}
                        added="text-lg font-bold"
                      />
                    );
                  })}
                  <span className="py-4 font-bold">
                    Difficulty: {d.difficulty}/10
                  </span>
                </p>
              </motion.div>
            </Link>
          );
        })}
      </section>
    </AnimatePresence>
  );
}

export default FilteredRecipes;
