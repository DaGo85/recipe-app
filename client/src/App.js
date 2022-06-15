import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { useAuthContext } from "./utility/AuthContext";
import useScrollToTop from "./utility/useScrollToTop";
import RecipeService from "./services/recipeService";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import SingleRecipe from "./pages/singlerecipe/SingleRecipe";
import SingleRecipeUpdate from "./pages/singlerecipeupdate/SingleRecipeUpdate";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./components/footer/Footer";
import Add from "./pages/addrecipe/Add";
import { useRecipesContext } from "./utility/RecipesContext";

// todo, images styling, placeholder, progressbar styling,

function App() {
  useScrollToTop();
  const { userData } = useAuthContext();
  const { recipesData, setRecipesData } = useRecipesContext();
  console.log("recipesdata check" + JSON.stringify(recipesData));

  useEffect(() => {
    const fetchedRecipes = async () => {
      const res = await RecipeService.getAll();
      setRecipesData(res.data);
    };

    fetchedRecipes();
  }, [setRecipesData]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipe:singlerecipeId" element={<SingleRecipe />} />
        <Route path="update:singlerecipeId" element={<SingleRecipeUpdate />} />
        {<Route path="*" element={<NotFound />} />}

        {userData && <Route path="add" element={<Add />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
