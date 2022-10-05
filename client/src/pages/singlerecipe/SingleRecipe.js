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
      .catch(() => {
        navigate("/notfound");
      });
  }, [path, navigate]);

  const handleEdit = () => {
    navigate(`/update${path}`);
  };

  const handleDeleteButton = () => {
    setShowModal(true);
  };

  return (
    <BackGround>
      {recipe ? (
        <article className="flex flex-col items-center justify-center">
          <h1 className="text-center">{recipe.title}</h1>
          <div className="flex flex-wrap items-center justify-center">
            {recipe.img[0] &&
              recipe.img.map((i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-center p-2 m-1 bg-secondaryLightContainer dark:bg-secondaryDarkContainer w-fit rounded-xl"
                  >
                    <img
                      onClick={() => {
                        setZoom(i);
                        setIsOpen(true);
                      }}
                      className="object-cover cursor-pointer w-72 h-72"
                      src={i}
                      alt="from recipe"
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col items-center justify-center gap-6 px-6 pt-20 pb-40 m-2 text-center rounded-card bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn w-9/10">
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
            <ul className="flex flex-wrap items-center justify-center w-11/12 gap-1">
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
                  <li key={ingr}>
                    <HighlightText text={ingr} />
                  </li>
                ))}
            </ul>
            <h2 className="text-sm">Difficulty: {recipe.difficulty}</h2>
            <h2 className="text-xl">Description: </h2>
            <pre>
              <p className="whitespace-pre-line font-reset">
                {recipe.description}
              </p>
            </pre>
            {userCreds?.name === recipe.username && (
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
