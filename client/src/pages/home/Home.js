import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../utility/AuthContext";
import { useRecipesContext } from "../../utility/RecipesContext";
import LastRecipe from "./components/LastRecipe";
import RandomRecipe from "./components/RandomRecipe";

function Home() {
  const { userData } = useAuthContext();
  const { recipesData } = useRecipesContext();

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
