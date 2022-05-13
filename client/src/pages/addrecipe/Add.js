import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";

function Add() {
  const [files, setFiles] = useState([]);
  const { userCreds } = useAuthContext();
  const [difficulty, setDifficulty] = useState(5);
  const [tags, setTags] = useState([]);
  const [existingTags, setExistingTags] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;

    const newRecipe = {
      username: userCreds.name,
      title: title.value,
      difficulty: difficulty,
      description: description.value,
      tags: "test",
      ingredients: ingredients.join(", "),
    };

    RecipeService.create(newRecipe)
      .then((response) => {})
      .catch((err) => {});

    files.forEach((file) => {
      try {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file.data);
        axios.post("http://localhost:5000/api/recipes/upload", data);
      } catch {}
    });

    /*
    RecipeService.addImages(data)
      .then((response) => {
        console.log("response" + JSON.stringify(response));
      })
      .catch((err) => {
        console.log(err);
      }); */
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

  const handleAddTag = () => {
    RecipeService.addTag(existingTags[existingTags.length - 1]);
  };

  const handleAddIngredient = () => {
    if (!ingredient) {
      return;
    }
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    setIngredient("");
  };

  const handleRemoveIngredient = (ingr) => {
    const newIngredients = ingredients.filter((rIngred) => rIngred !== ingr);
    setIngredients(newIngredients);
  };

  useEffect(() => {
    RecipeService.getTags()
      .then((response) => setExistingTags(response))
      .catch((err) => {});
  }, [existingTags]);

  return (
    <main className="background-setup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className=""
          id="title"
          required
          placeholder="Title"
        />
        <button
          onClick={() => {
            fileRef.current.click();
          }}
        >
          add image
        </button>
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
        <p>
          {tags.map((tag) => {
            return <div>tag</div>;
          })}
        </p>
        <div>
          ingredients:
          <ul>
            {ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>
                  {ingredient}
                  <button onClick={() => handleRemoveIngredient(ingredient)}>
                    remove
                  </button>
                </li>
              );
            })}
            <li>
              <input
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
              />
            </li>
          </ul>
          <button onClick={() => handleAddIngredient()}>
            add this ingredient+++
          </button>
        </div>
        <div>
          <ul>
            {existingTags.map((tag) => {
              return <li>tag</li>;
            })}
            <li>
              <button onClick={handleAddTag}>Add a new tag</button>
            </li>
          </ul>
        </div>
        <div>
          <input
            id="difficulty"
            type="range"
            min="1"
            max="10"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className=""
            required
            placeholder="Difficulty"
          />
        </div>
        <textarea id="description" placeholder="Description" required />
        <button type="submit">submit</button>
      </form>
    </main>
  );
}

export default Add;
