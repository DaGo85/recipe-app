import axios from "axios";
import React from "react";
import RecipeService from "../../services/recipeService";
import { useAuthContext } from "../../utility/AuthContext";

function Add() {
  const { userCreds } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, difficulty } = e.target.elements;
    console.log(title);

    const newRecipe = {
      username: "userCreds.name",
      title: title.value,
      difficulty: difficulty.value,
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
        <div>add one or more? images</div>
        dropdown with existing tags and option to create a new one
        <input
          id="difficulty"
          type="text"
          className=""
          required
          placeholder="Difficulty"
        />
        <textarea id="description" placeholder="Description" required />
        <button type="submit">submit</button>
      </form>
    </main>
  );
}

export default Add;
