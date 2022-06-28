//page for editing recipe

import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { tagList } from "../../assets/data";
import { motion } from "framer-motion";
import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";
import handleDeleteFirebaseImg from "../../utility/handleDeleteFirebaseImg";

import ProgressBar from "../../components/elements/ProgressBar";
import Background from "../../components/background/BackGround";

function SingleRecipe() {
  const [recipe, setRecipe] = useState("");
  const [difficultyText, setDifficultyText] = useState("medium");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState();
  const [file, setFile] = useState();
  const [addIng, setAddIng] = useState([]);
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState();

  const location = useLocation();
  const path = location.pathname.split("/update")[1];

  const { userCreds } = useAuthContext();

  const navigate = useNavigate();

  const fileUpdateRef = useRef();

  // Fetching singlerecipe from the API
  useEffect(() => {
    const fetchedrecipe = async () => {
      const res = await RecipeService.get(path);
      setRecipe(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setDifficulty(res.data.difficulty);
      setIngredients(res.data.ingredients);
      setTags(res.data.tags);
      setImages(res.data.img);
    };
    fetchedrecipe();
  }, [path]);

  const handleRecipeUpdate = async () => {
    const updatedRecipe = {
      title: title,
      description: description,
      difficulty: difficulty,
      ingredients: ingredients,
      tags: tags,
      id: recipe.id,
      username: recipe.username,
      img: images,
    };

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userCreds.token}`,
    };

    await RecipeService.update(recipe.title, updatedRecipe, headers).catch(
      (err) => {
        navigate("/notfound");
      }
    );
    navigate(`/recipe${title}`);
  };

  const handleImageUpload = async (e) => {
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

  useEffect(() => {
    if (url) {
      setImages((prevValue) => [...prevValue, url]);
      setUrl(null);
    }
  }, [url]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredients((prevIngredients) => [...prevIngredients, addIng]);
    setAddIng("");
  };

  const handleRemoveIngredient = (ingr) => {
    const newIngredients = ingredients.filter((rIngred) => rIngred !== ingr);
    setIngredients(newIngredients);
  };

  const handleDeleteImg = (del) => {
    setImages((prevValue) => prevValue.filter((v) => v !== del));
    handleDeleteFirebaseImg(del);
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

  return (
    <Background>
      <input
        className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
          text-primaryLightContainerOn dark:text-primaryDarkContainerOn
          placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
          bg-lightVariantSurface dark:bg-darkSurface focus:border-darkOutline"
        value={title}
        onKeyDown={(e) => {
          if (e.key === "/") {
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {images.map((i) => {
        return (
          <img
            className="cursor-not-allowed"
            onClick={() => handleDeleteImg(i)}
            key={i}
            src={i}
            alt="from recipe"
          />
        );
      })}
      <input
        accept="image/jpg,image/png,image/jpeg"
        className="hidden"
        type="file"
        onChange={(e) => handleImageUpload(e)}
        ref={fileUpdateRef}
      />
      <motion.button
        onClick={() => {
          fileUpdateRef.current.click();
        }}
        className="random-container"
        whileHover={{
          rotate: [0, 0, -50, 0],
          transition: {
            repeat: Infinity,
            duration: 0.35,
          },
        }}
      >
        <svg
          className="w-16 random-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z" />
        </svg>
      </motion.button>
      {selected && (
        <ProgressBar
          selected={selected}
          setSelected={setSelected}
          setUrl={setUrl}
        />
      )}
      <div className="flex flex-col text-center">
        <h2>Choose your tags</h2>
        <ul className="flex flex-wrap justify-center items-center gap-1">
          {tagList.map((tagM) => {
            return (
              <li key={tagM}>
                {tags.includes(tagM) ? (
                  <div
                    className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                     from-primaryLightContainer/75 to-[#bdeeb5] dark:from-primaryDarkContainer dark:to-[#264d26]
                     cursor-not-allowed"
                    onClick={() =>
                      setTags((prevTag) => prevTag.filter((f) => f !== tagM))
                    }
                  >
                    {tagM}
                  </div>
                ) : (
                  <div
                    className="border-4 p-2 border-lightOutline dark:border-darkOutline border-double bg-gradient-to-r
                       dark:from-secondaryDarkContainer/40 dark:to-secondaryDarkContainer
                     cursor-crosshair"
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
      <ul className="flex flex-col gap-2 px-2 w-full">
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient}>
              <div className="flex justify-between items-center z-50 pb-2">
                {ingredient}
                <button
                  className="border rounded-3xl px-2 bg-errorLight dark:bg-errorDarkContainer border-errorLight dark:border-errorDarkContainer
                   text-errorLightOn dark:text-errorDarkContainerOn hover:bg-errorLight/60 dark:hover:bg-errorDarkContainer/60"
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
        className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
          text-primaryLightContainerOn dark:text-primaryDarkContainerOn
          placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
          bg-lightVariantSurface dark:bg-darkSurface"
        value={addIng}
        onChange={(e) => setAddIng(e.target.value)}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") {
            handleAddIngredient(e);
          }
        }}
        placeholder="Add Ingredient"
      />
      <button
        className="button-setup"
        type="button"
        onClick={(e) => handleAddIngredient(e)}
      >
        Add Ingredient
      </button>
      <div>
        <h4>
          Difficulty: {difficulty}/10 {difficultyText}
        </h4>
        <input
          type="range"
          min="1"
          max="10"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="slider-button"
          required
          placeholder="Difficulty"
        />
      </div>
      <textarea
        className="px-1 py-1 border-2 shadow-lg w-11/12 h-96 border-lightOutline dark:border-darkOutline
    text-primaryLightContainerOn dark:text-primaryDarkContainerOn
     placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
     bg-lightVariantSurface dark:bg-darkSurface"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button-setup" onClick={() => handleRecipeUpdate()}>
        update!
      </button>
    </Background>
  );
}

export default SingleRecipe;
