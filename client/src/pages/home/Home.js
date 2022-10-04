//Landing Page

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import RecipeService from "../../services/recipeService";
import { useRecipesContext } from "../../utility/RecipesContext";

import AddRecipeButton from "../../components/elements/AddRecipeButton";
import HRIcon from "../../components/elements/HRIcon";
import LastRecipe from "./components/LastRecipe";
import RandomRecipe from "./components/RandomRecipe";
import Statistics from "./components/Statistics";
import SubText from "./components/SubText";
import BackGround from "../../components/background/BackGround";

function Home() {
  const [error, setError] = useState("");
  const location = useLocation();
  const path = location.pathname;

  const { setRecipesData } = useRecipesContext();

  useEffect(() => {
    const fetchedRecipes = async () => {
      try {
        const res = await RecipeService.getAll();
        setRecipesData(res.data);
      } catch (err) {
        if (err.message === "Request failed with status code 500") {
          setError(
            "Sorry, there are some issues with the free tier of the MySQL DB! I'm working on it!"
          );
        }
      }
    };

    fetchedRecipes();
  }, [path, setRecipesData]);

  return (
    <BackGround>
      <h1>Welcome to Foody!</h1>
      {error && (
        <div className="bg-white border-2 rounded-lg">
          <h2 className="p-4">{error}</h2>
        </div>
      )}
      <HRIcon
        path={
          <path d="M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z" />
        }
        view="0 0 512 512"
      />
      <SubText text="Here you can find and create Recipes!" />
      <LastRecipe />
      <HRIcon
        path={
          <path d="M0 219.2v212.5c0 14.25 11.62 26.25 26.5 27C75.32 461.2 180.2 471.3 240 511.9V245.2C181.4 205.5 79.99 194.8 29.84 192C13.59 191.1 0 203.6 0 219.2zM482.2 192c-50.09 2.848-151.3 13.47-209.1 53.09C272.1 245.2 272 245.3 272 245.5v266.5c60.04-40.39 164.7-50.76 213.5-53.28C500.4 457.9 512 445.9 512 431.7V219.2C512 203.6 498.4 191.1 482.2 192zM352 96c0-53-43-96-96-96S160 43 160 96s43 96 96 96S352 149 352 96z" />
        }
        view="0 0 512 512"
      />
      <SubText text="Did you know?" />
      <Statistics />
      <RandomRecipe />
      <AddRecipeButton />
    </BackGround>
  );
}

export default Home;
