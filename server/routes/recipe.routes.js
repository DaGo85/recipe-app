module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");

  let router = require("express").Router();

  // Create a new recipe
  router.post("/", recipes.create);

  // Retrieve all recipes
  router.get("/", recipes.findAll);

  // Retrieve all published recipes
  router.get("/published", recipes.findAllPublished);

  // Retrieve a single recipe with id
  router.get("/:id", recipes.findOne);

  // Update a recipe with id
  router.put("/:id", recipes.update);

  // Delete a recipe with id
  router.delete("/:id", recipes.delete);

  // Delete all recipes
  router.delete("/", recipes.deleteAll);

  app.use("/api/recipes", router);
};
