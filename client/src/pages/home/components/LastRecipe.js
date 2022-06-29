// Last recipe component for home

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipeService from "../../../services/recipeService";
import { motion } from "framer-motion";

import SkeletonArticle from "../../../skeletons/SkeletonArticle";
import HighlightText from "../../../components/elements/HighlightText";

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
      <h2>Newest Recipe: </h2>
      {recipe ? (
        <motion.article
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          className="cursor-pointer rounded-card bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn p-4
    flex flex-col justify-center items-center gap-6 m-2"
          onClick={() => handleLink()}
        >
          <h3>{recipe.title}</h3>
          <img className="" src={recipe.img[0]} alt="from recipe" />
          <div className="flex flex-col gap-1">
            <h4>
              created by:
              <br />
              <HighlightText text={recipe.username} />
            </h4>
            <h4>
              created at: <br />
              <HighlightText text={new Date(recipe.createdAt).toDateString()} />
            </h4>
          </div>
          <p className="text-[1.17em] flex flex-wrap gap-1 items-center justify-center">
            {recipe.tags.map((t) => {
              return (
                <HighlightText key={t} text={t} added="text-lg font-bold" />
              );
            })}
            <span className="py-4">Difficulty: {recipe.difficulty}/10</span>
          </p>
        </motion.article>
      ) : (
        <SkeletonArticle />
      )}
    </>
  );
}

export default LastRecipe;
