import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import DeleteModal from "../../components/elements/DeleteModal";
import ImageModal from "../../components/elements/ImageModal";

import RecipeService from "../../services/recipeService";
import SkeletonArticle from "../../skeletons/SkeletonArticle";
import { useAuthContext } from "../../utility/AuthContext";
import handleDeleteFirebaseImg from "../../utility/handleDeleteFirebaseImg";

//todo: ingredients

function SingleRecipe() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/recipe")[1];
  const [recipe, setRecipe] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState("");
  const { userCreds } = useAuthContext();

  const navigate = useNavigate();

  //Handler for deleting singlepost from the API
  const handleDelete = async () => {
    recipe.img.forEach((r) => {
      handleDeleteFirebaseImg(r);
    });

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userCreds.token}`,
    };

    await RecipeService.remove(recipe.id, headers);
    navigate("/");
  };

  //Handler for getting singlepost from the API
  useEffect(() => {
    RecipeService.get(path)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((err) => {
        //navigate("/notfound");
      });
  }, [path]);

  console.log("imagecheck" + JSON.stringify(recipe?.images));
  return (
    <main>
      <SkeletonArticle />
      {recipe ? (
        <article className="background-setup">
          <h1 className="break-all text-center">{recipe.title}</h1>
          {recipe.img.map((i) => {
            return (
              <img
                onClick={() => {
                  setZoom(i);
                  setIsOpen(true);
                }}
                className="w-72 h-72"
                key={i}
                src={i}
                alt="from recipe"
              />
            );
          })}

          <div className="recipe-card pt-10 text-center">
            <h2 className="text-xl">
              created by:
              <br />
              <span className="highlight-gradient text-2xl">
                {recipe.username}
              </span>
            </h2>
            <h2 className="text-xl">
              created at: <br />
              <span className="highlight-gradient text-2xl">
                {new Date(recipe.createdAt).toDateString()}
              </span>
            </h2>
            <ul className="w-11/12 flex gap-1 flex-wrap items-center justify-center">
              {recipe.tags.map((t) => {
                return (
                  <li
                    key={t}
                    className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                     from-primaryLightContainer/75 to-[#bdeeb5] dark:from-primaryDarkContainer/75 dark:to-[#264d26]"
                  >
                    {t}
                  </li>
                );
              })}
            </ul>
            <h2 className="text-xl">ingredients: </h2>
            <ul className="text-left">
              {recipe &&
                recipe.ingredients.map((ingr) => (
                  <li key={ingr} className="">
                    {ingr}
                  </li>
                ))}
            </ul>
            <h2 className="text-xl">Description: </h2>
            <pre>
              <p className="whitespace-pre-line font-reset">
                {recipe.description}
              </p>
            </pre>
            <button
              className="delete-button-setup"
              onClick={() => setShowModal(true)}
            >
              delete
            </button>
            <button
              className="button-setup mb-6"
              onClick={() => navigate(`/update${path}`)}
            >
              edit
            </button>
            <DeleteModal
              handleDelete={handleDelete}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </article>
      ) : (
        <SkeletonArticle />
      )}
      {isOpen && <ImageModal setIsOpen={setIsOpen} image={zoom} />}
    </main>
  );
}

export default SingleRecipe;
