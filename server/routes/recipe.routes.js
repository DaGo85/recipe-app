//Router for all controller functionalities

module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");

  let router = require("express").Router();

  // Create a new recipe
  router.post("/", recipes.create);

  // Retrieve all recipes
  router.get("/", recipes.findAll);

  // Get facts
  router.get("/facts", recipes.facts);

  // Retrieve last recipe
  router.get("/last", recipes.findLast);

  // Retrieve a single recipe per title
  router.get("/:title", recipes.findOne);

  // Update a recipe with title
  router.put("/:title", recipes.update);

  // Delete a recipe with id
  router.delete("/:id", recipes.delete);

  app.use("/api/recipes", router);
};
