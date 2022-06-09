import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
                <h3 className="font-bold">{d.title}</h3>
                <div className="flex flex-col gap-1">
                  <h5>
                    created by:
                    <br />
                    <span className="highlight-gradient">{d.username}</span>
                  </h5>
                  <h5>
                    created at: <br />
                    <span className="highlight-gradient">
                      {new Date(d.createdAt).toDateString()}
                    </span>
                  </h5>
                </div>
                <p className="text-[1.17em] flex flex-wrap gap-1 items-center justify-center">
                  {d.tags.map((t) => {
                    return (
                      <span
                        key={t}
                        className="text-lg font-bold highlight-gradient"
                      >
                        {t}
                      </span>
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
