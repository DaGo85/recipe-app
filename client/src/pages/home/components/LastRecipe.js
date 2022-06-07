import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeService from "../../../services/recipeService";
import imgMock from "../../../assets/test.jpg";
import { motion } from "framer-motion";

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

  console.log("lastrecipe:" + JSON.stringify(recipe));

  return (
    <>
      <h2>Our last Recipe:</h2>
      {recipe ? (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
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
        </motion.div>
      ) : (
        <section>placeholder</section>
      )}
    </>
  );
}

export default LastRecipe;
