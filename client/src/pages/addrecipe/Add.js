import axios from "axios";
import React, { useRef, useState } from "react";
import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";

function Add() {
  const [file, setFile] = useState(null);
  const fileRef = useRef();
  const { userCreds } = useAuthContext();
  const [difficulty, setDifficulty] = useState("5");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title);

    const newRecipe = {
      username: "userCreds.name",
      title: title.value,
      difficulty: difficulty,
      description: description.value,
    };

    try {
      await axios.post("http://localhost:5000/api/recipes", newRecipe);
    } catch (err) {
      console.log(err);
    }
    console.log(newRecipe);
    RecipeService.create(newRecipe)
      .then((response) => {})
      .catch((err) => {});
  };

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
        <div className="card-setup py-4 md:py-10 max-w-7xl">
          {file ? (
            <div
              className="flex flex-col hover:cursor-pointer gap-image text-center"
              onClick={() => {
                setFile(null);
                fileRef.current.value = null;
                fileRef.current.click();
              }}
            >
              <img
                alt="Neues Bild zum hochladen"
                src={URL.createObjectURL(file)}
              />
              <h4>Klick hier, wenn du ein anderes Bild wählen möchtest!</h4>
            </div>
          ) : (
            <div
              className="flex flex-col hover:cursor-pointer gap-image text-center max-w-7xl"
              onClick={() => {
                fileRef.current.click();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="fill-basic"
                  d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"
                />
              </svg>
              <h4>Klick hier, wenn du ein Bild hinzufügen willst!</h4>
            </div>
          )}
        </div>
        <input
          accept="image/jpg,image/png,image/jpeg"
          className="hidden"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          multiple={false}
          ref={fileRef}
        />
        <div>add one or more? images</div>
        dropdown with existing tags and option to create a new one
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
