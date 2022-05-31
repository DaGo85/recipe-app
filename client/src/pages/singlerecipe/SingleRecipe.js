import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import DeleteModal from "../../components/elements/DeleteModal";

import RecipeService from "../../services/recipeService";

function SingleRecipe() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/recipe")[1];
  const [recipe, setRecipe] = useState(null);
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  //Handler for deleting singlepost from the API
  const handleDelete = async () => {
    await RecipeService.remove(recipe.id);
    navigate("/");
  };

  //Handler for getting singlepost from the API
  useEffect(() => {
    RecipeService.get(path)
      .then((response) => {
        setRecipe(response.data);

        const base64String = String.fromCharCode(
          ...new Uint8Array(response.data.images[0].data.data)
        );
        console.log("response check" + JSON.stringify(base64String));
        setImages(base64String);
      })
      .catch((err) => {
        // navigate("/notfound");
      });
  }, [path]);

  const deleteHandler = () => setShowModal(true);

  console.log("imagecheck" + JSON.stringify(recipe?.images));
  return (
    <>
      {recipe ? (
        <main className="background-setup">
          <h1>{recipe.title}</h1>
          {images &&
            recipe.images.map((image) => {
              return (
                <img
                  className="w-20 h-20"
                  src={URL.createObjectURL(
                    `data:${image.type};base64,${images}`
                  )}
                  alt="from recipe"
                />
              );
            })}
          <h3>created by: {recipe.username}</h3>
          <h6>created at: {new Date(recipe.createdAt).toDateString()}</h6>
          <h6>difficulty: {recipe.difficulty}/10</h6>
          <ul>
            <li>tags</li>
          </ul>
          <h6>ingredients:</h6>
          <ul>
            {recipe &&
              recipe.ingredients.map((ingr) => <li key={ingr}>{ingr}</li>)}
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
