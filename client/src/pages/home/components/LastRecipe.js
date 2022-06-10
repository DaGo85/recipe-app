import { useEffect, useState } from "react";
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

  return (
    <>
      <h2>Newest Recipe:</h2>
      {recipe ? (
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          className="cursor-pointer recipe-card"
          onClick={() => handleLink()}
        >
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
              <span className="highlight-gradient">
                {new Date(recipe.createdAt).toDateString()}
              </span>
            </h5>
          </div>
          <p className="text-[1.17em] flex flex-wrap gap-1 items-center justify-center">
            {recipe.tags.map((t) => {
              return (
                <span key={t} className="text-lg font-bold highlight-gradient">
                  {t}
                </span>
              );
            })}
            <span className="py-4">Difficulty: {recipe.difficulty}/10</span>
          </p>
        </motion.section>
      ) : (
        <section>placeholder</section>
      )}
    </>
  );
}

export default LastRecipe;
