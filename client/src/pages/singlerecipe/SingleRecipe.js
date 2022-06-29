//Single detailed recipe page

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";
import handleDeleteFirebaseImg from "../../utility/handleDeleteFirebaseImg";

import DeleteModal from "../../components/elements/DeleteModal";
import ImageModal from "../../components/elements/ImageModal";
import SkeletonArticle from "../../skeletons/SkeletonArticle";
import BackGround from "../../components/background/BackGround";
import HighlightText from "../../components/elements/HighlightText";
import GenericButton from "../../components/elements/GenericButton";
import GenericDeleteButton from "../../components/elements/GenericDeleteButton";

//todo: ingredients

function SingleRecipe() {
  const [showModal, setShowModal] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState("");

  const location = useLocation();
  const path = location.pathname.split("/recipe")[1];

  const { userCreds } = useAuthContext();

  const navigate = useNavigate();

  //Handler for deleting singlerecipe from the API
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

  //Handler for getting singlerecipe from the API
  useEffect(() => {
    RecipeService.get(path)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((err) => {
        navigate("/notfound");
      });
  }, [path, navigate]);

  const handleEdit = () => {
    navigate(`/update${path}`);
  };

  const handleDeleteButton = () => {
    setShowModal(true);
  };

  console.log("imagecheck" + JSON.stringify(recipe?.images));
  return (
    <BackGround>
      {recipe ? (
        <article>
          <h1 className="break-all text-center">{recipe.title}</h1>
          {recipe.img[0] &&
            recipe.img.map((i) => {
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
          <div
            className="rounded-card bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn p-4
    flex flex-col justify-center items-center gap-6 m-2 pt-10 text-center"
          >
            <h2 className="text-xl">
              created by:
              <br />
              <HighlightText text={recipe.username} added="text-2xl" />
            </h2>
            <h2 className="text-xl">
              created at: <br />
              <HighlightText
                text={new Date(recipe.createdAt).toDateString()}
                added="text-2xl"
              />
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

            {userCreds.name === recipe.username && (
              <>
                <GenericDeleteButton
                  handler={handleDeleteButton}
                  text="Delete"
                />
                <GenericButton
                  text="Edit"
                  added="mb-6"
                  type="button"
                  handler={handleEdit}
                />
                <DeleteModal
                  handleDelete={handleDelete}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </>
            )}
          </div>
        </article>
      ) : (
        <SkeletonArticle />
      )}
      {isOpen && <ImageModal setIsOpen={setIsOpen} image={zoom} />}
    </BackGround>
  );
}

export default SingleRecipe;
