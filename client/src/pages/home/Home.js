import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";
import { useRecipesContext } from "../../utility/RecipesContext";
import LastRecipe from "./components/LastRecipe";
import RandomRecipe from "./components/RandomRecipe";

function Home() {
  const { userData } = useAuthContext();
  const { recipesData, setRecipesData } = useRecipesContext();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const fetchedRecipes = async () => {
      const res = await RecipeService.getAll();
      setRecipesData(res.data);
    };

    fetchedRecipes();
  }, [path, setRecipesData]);

  return (
    <main className="background-setup">
      <h1>Welcome to Reciper</h1>
      <h3>Here you can find and create Gluten- and Sorbitfree recipes!</h3>
      <RandomRecipe recipesData={recipesData} />
      <section className="">Some Statistics</section>
      <LastRecipe />
      {userData ? (
        <Link to="/add">
          <button>Add a Recipe</button>
        </Link>
      ) : (
        <button>Do you want to add a recipe? Please register here.</button>
      )}
    </main>
  );
}

export default Home;
