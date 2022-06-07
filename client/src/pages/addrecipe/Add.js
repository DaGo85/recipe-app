import React, { useEffect, useRef, useState } from "react";
import RecipeService from "../../services/recipeService";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../utility/AuthContext";
import { tagList } from "../../assets/data";
import { motion } from "framer-motion";

function Add() {
  const [files, setFiles] = useState([]);
  const { userCreds } = useAuthContext();
  const [difficulty, setDifficulty] = useState(5);
  const [difficultyText, setDifficultyText] = useState("medium");
  const [tags, setTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [addIng, setAddIng] = useState([]);

  const navigate = useNavigate();

  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;

    const newRecipe = {
      username: userCreds.name,
      title: title.value,
      difficulty: difficulty,
      description: description.value,
      tags: tags,
      ingredients: ingredients,
      id: "",
    };

    try {
      await RecipeService.create(newRecipe)
        .then((response) => {
          newRecipe.id = response.data.id;
        })
        .catch((err) => {});
    } catch {}

    files.forEach(async (file) => {
      try {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file.data);
        data.append("recipeId", newRecipe.id);
        await RecipeService.addImages(data);
      } catch {}
    });

    //navigate(`/recipe${newRecipe.title}`);
  };

  const handleImageInput = (e) => {
    const tempArr = [];
    [...e.target.files].forEach((file) => {
      tempArr.push({
        data: file,
        url: URL.createObjectURL(file),
      });
    });

    setFiles((prevState) => [...prevState, ...tempArr]);
  };

  const handleAddIngredient = (e) => {
    e.preventDefault();
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

  return (
    <main className="background-setup">
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <h1>Add a recipe</h1>
        <input
          type="text"
          className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
          text-primaryLightContainerOn dark:text-primaryDarkContainerOn
          placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
          bg-lightVariantSurface dark:bg-darkSurface"
          id="title"
          required
          placeholder="Title"
        />
        <motion.button
          onClick={() => {
            fileRef.current.click();
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
        {files.map((fileSrc) => (
          <img
            key={fileSrc.url}
            src={fileSrc.url}
            alt="not found"
            width={"250px"}
          />
        ))}
        <input
          accept="image/jpg,image/png,image/jpeg"
          className="hidden"
          type="file"
          onChange={handleImageInput}
          multiple
          ref={fileRef}
        />
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
          <ul>
            {tagList.map((tagM) => {
              return (
                <li key={tagM}>
                  {tags.includes(tagM) ? (
                    <div
                      className=""
                      onClick={() =>
                        setTags((prevTag) => prevTag.filter((f) => f !== tagM))
                      }
                    >
                      {tagM}
                    </div>
                  ) : (
                    <div
                      className=""
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
            onChange={(e) => setDifficulty(e.target.value)}
            className="slider-button"
            required
            placeholder="Difficulty"
          />
        </div>
        <textarea
          className="px-1 py-1 border-2 shadow-lg w-11/12 border-lightOutline dark:border-darkOutline
    text-primaryLightContainerOn dark:text-primaryDarkContainerOn
     placeholder-primaryLightContainerOn/40 dark:placeholder-primaryDarkContainerOn/40 
     bg-lightVariantSurface dark:bg-darkSurface"
          id="description"
          placeholder="Description"
          required
        />
        <button className="button-setup" type="submit">
          submit
        </button>
      </form>
    </main>
  );
}

export default Add;
