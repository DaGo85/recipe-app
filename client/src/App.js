//Router component

//Import for React and dependencies
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//Import for utilities and context
import { useAuthContext } from "./utility/AuthContext";
import useScrollToTop from "./utility/useScrollToTop";
import RecipeService from "./services/recipeService";
import { useRecipesContext } from "./utility/RecipesContext";

//Import for pages and components
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import SingleRecipe from "./pages/singlerecipe/SingleRecipe";
import SingleRecipeUpdate from "./pages/singlerecipeupdate/SingleRecipeUpdate";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./components/footer/Footer";
import Add from "./pages/addrecipe/Add";

//todo, images styling, image modal

function App() {
  useScrollToTop();
  const { userData } = useAuthContext();
  const { setRecipesData } = useRecipesContext();

  useEffect(() => {
    const fetchedRecipes = async () => {
      const res = await RecipeService.getAll();
      setRecipesData(res.data);
    };

    fetchedRecipes();
  }, [setRecipesData]);

  return (
    <>
      <header>
        <NavBar />
      </header>
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
