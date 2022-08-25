//Page for adding a recipe

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";
import { tagList } from "../../assets/data";
import handleDeleteFirebaseImg from "../../utility/handleDeleteFirebaseImg";

import ProgressBar from "../../components/elements/ProgressBar";
import BackGround from "../../components/background/BackGround";
import GenericButton from "../../components/elements/GenericButton";
import WiggleButton from "../../components/elements/WiggleButton";
import DeleteImage from "../../components/elements/DeleteImage";
import RemoveTag from "../../components/elements/RemoveTag";

function Add() {
  const [file, setFile] = useState([]);
  const [difficulty, setDifficulty] = useState(5);
  const [difficultyText, setDifficultyText] = useState("medium");
  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [addIng, setAddIng] = useState([]);
  const [url, setUrl] = useState();
  const [selected, setSelected] = useState();
  const [images, setImages] = useState([]);

  const { userCreds } = useAuthContext();

  const navigate = useNavigate();

  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userCreds.token}`,
    };

    const newRecipe = {
      username: userCreds.name,
      title: title.value.replace("/", ","),
      difficulty: difficulty,
      description: description.value,
      tags: tags,
      ingredients: ingredients,
      img: images,
    };

    try {
      await RecipeService.create(newRecipe, headers);
    } catch {
      (e) => {
        console.log(e.message);
      };
    }

    navigate(`/recipe${newRecipe.title}`);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    // Restriction for files: jpeg,jpg and png only, also the size has to be
    // maximal 3000000 ( 3mb )
    if (file === null) return;
    if (
      e.target.files[0].name.match(/\.(jpeg|jpg|png)$/) &&
      e.target.files[0].size <= 3000000
    ) {
      setSelected(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleDeleteImg = async (del) => {
    setImages((prevValue) => prevValue.filter((v) => v !== del));
    handleDeleteFirebaseImg(del);
  };

  useEffect(() => {
    if (url) {
      setImages((prevValue) => [...prevValue, url]);
      setUrl(null);
    }
  }, [url]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (addIng === "") return;
    setIngredients((prevIngredients) => [...prevIngredients, addIng]);
    setAddIng("");
  };

  const handleRemoveIngredient = (ingr) => {
    const newIngredients = ingredients.filter((rIngred) => rIngred !== ingr);
    setIngredients(newIngredients);
  };

  useEffect(() => {
    const handleDifficulty = () => {
      switch (true) {
        case difficulty > 8:
          setDifficultyText("very hard");
          break;
        case difficulty > 6:
          setDifficultyText("hard");
          break;
        case difficulty > 4:
          setDifficultyText("medium");
          break;
        case difficulty > 2:
          setDifficultyText("easy");
          break;
        case difficulty > 0:
          setDifficultyText("very easy");
          break;
        default:
          setDifficultyText("very easy");
          break;
      }
    };
    handleDifficulty();
  }, [difficulty]);

  const handleImageClick = () => {
    fileRef.current.click();
  };

  return (
    <BackGround>
      <form
        className="flex flex-col items-center justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <h1>Add a recipe</h1>
        <input
          type="text"
          className="w-11/12 px-1 py-1 border-2 shadow-lg border-lightOutline dark:border-darkOutline text-primaryLightContainerOn dark:text-primaryDarkContainerOn placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 bg-lightVariantSurface dark:bg-darkSurface focus:border-darkOutline"
          id="title"
          required
          placeholder="Title"
        />
        <WiggleButton
          label="adding image to recipe"
          handler={handleImageClick}
          viewBox="0 0 512 512"
          svg="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"
        />
        {selected && (
          <ProgressBar
            selected={selected}
            setSelected={setSelected}
            setUrl={setUrl}
          />
        )}
        <div className="flex flex-wrap">
          {images.map((i) => (
            <div
              key={i}
              className="relative flex items-center justify-center p-2 m-1 transition-all duration-300 group bg-secondaryLightContainer dark:bg-secondaryDarkContainer w-fit rounded-xl"
            >
              <DeleteImage handleDeleteImg={handleDeleteImg} i={i} />
              <img
                className="object-cover cursor-pointer w-72 h-72"
                onClick={() => handleDeleteImg(i)}
                src={i}
                alt="uploading for recipe"
              />
            </div>
          ))}
        </div>
        <input
          accept="image/jpg,image/png,image/jpeg"
          className="hidden"
          type="file"
          onChange={(e) => handleImageUpload(e)}
          ref={fileRef}
        />
        <ul
          className="flex flex-col w-full gap-2 px-2"
          data-testid="ingredient-list"
        >
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient}>
                <div className="z-50 flex items-center justify-between pb-2">
                  {ingredient}
                  <button
                    className="px-2 border rounded-3xl bg-errorLight dark:bg-errorDarkContainer border-errorLight dark:border-errorDarkContainer text-errorLightOn dark:text-errorDarkContainerOn hover:bg-errorLight/60 dark:hover:bg-errorDarkContainer/60"
                    type="button"
                    onClick={() => handleRemoveIngredient(ingredient)}
                  >
                    -
                  </button>
                </div>
                <hr className="hr-setup" />
              </li>
            );
          })}
        </ul>
        <input
          className="w-11/12 px-1 py-1 border-2 shadow-lg border-lightOutline dark:border-darkOutline text-primaryLightContainerOn dark:text-primaryDarkContainerOn placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 bg-lightVariantSurface dark:bg-darkSurface"
          value={addIng}
          onChange={(e) => setAddIng(e.target.value)}
          onKeyDown={(e) => {
            if (e.key.toLowerCase() === "enter") {
              handleAddIngredient(e);
            }
          }}
          placeholder="Add Ingredient"
          data-testid="ingredient-input"
        />
        <GenericButton
          text="Add Ingredient"
          type="button"
          handler={handleAddIngredient}
        />
        <div className="flex flex-col text-center">
          <h2>Choose your tags</h2>
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {tagList.map((tagM) => {
              return (
                <li key={tagM}>
                  {tags.includes(tagM) ? (
                    <div
                      className="group relative border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                     from-primaryLightContainer/75 to-[#bdeeb5] dark:from-primaryDarkContainer dark:to-[#264d26]
                     cursor-pointer"
                      onClick={() =>
                        setTags((prevTag) => prevTag.filter((f) => f !== tagM))
                      }
                    >
                      <RemoveTag />
                      {tagM}
                    </div>
                  ) : (
                    <div
                      className="p-2 border-4 border-double cursor-pointer border-lightOutline dark:border-darkOutline bg-gradient-to-r dark:from-secondaryDarkContainer/40 dark:to-secondaryDarkContainer"
                      onClick={() => setTags((prevTags) => [...prevTags, tagM])}
                    >
                      {tagM}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>
            Difficulty: {difficulty}/10 {difficultyText}
          </h4>
          <input
            id="difficulty"
            type="range"
            min="1"
            max="10"
            value={difficulty}
            onTouchStart={(e) => setDifficulty(e.target.value)}
            onChange={(e) => setDifficulty(e.target.value)}
            className="slider-button"
            required
            placeholder="Difficulty"
          />
        </div>
        <textarea
          className="w-11/12 px-1 py-1 border-2 shadow-lg h-96 border-lightOutline dark:border-darkOutline text-primaryLightContainerOn dark:text-primaryDarkContainerOn placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 bg-lightVariantSurface dark:bg-darkSurface"
          id="description"
          placeholder="Description"
          required
        />
        <GenericButton
          text="Submit"
          added="disabled:bg-slate-400"
          type="submit"
          disabled={selected}
        />
      </form>
    </BackGround>
  );
}

export default Add;
