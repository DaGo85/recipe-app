import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import DeleteModal from "../../components/elements/DeleteModal";

import RecipeService from "../../services/recipeService";
import { useRecipesContext } from "../../utility/RecipesContext";

function SingleRecipe() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/recipe")[1];

  const [recipe, setRecipe] = useState();
  const { recipesData } = useRecipesContext();

  const navigate = useNavigate();

  //Handler for deleting singlepost from the API
  const handleDelete = async () => {
    RecipeService.remove(recipesData[path].id).then(navigate("/"));
  };

  useEffect(() => {
    setRecipe(recipesData[path - 1]);
  }, []);

  const deleteHandler = () => setShowModal(true);

  return (
    <>
      {recipe ? (
        <main className="background-setup">
          <h1>{recipe.title}</h1>
          <h3>created by: {recipe.username}</h3>
          <h6>created at: {new Date(recipe.createdAt).toDateString()}</h6>
          <h6>difficulty: {recipe.difficulty}/10</h6>
          <ul>
            <li>tags</li>
          </ul>
          <h6>ingredients:</h6>
          <ul>
            {/*recipe &&
              recipe.ingredients
                .split(", ")
      .map((ingr) => <li key={ingr}>{ingr}</li>)*/}
          </ul>
          <section>
            <p>{recipe.description}</p>
          </section>
          <button onClick={() => deleteHandler()}>delete</button>
          <button
            className="button-setup"
            onClick={() => navigate(`/update${path}`)}
          >
            edit
          </button>
          <section>voting section if logged in?</section>
          <DeleteModal
            handleDelete={handleDelete}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </main>
      ) : (
        <section>placeholder</section>
      )}
    </>
  );
}

export default SingleRecipe;
