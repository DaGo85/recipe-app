module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");
  const uploadController = require("../controllers/upload");
  const upload = require("../middleware/upload");

  let router = require("express").Router();

  // Create a new recipe
  router.post("/", recipes.create);

  // Retrieve all recipes
  router.get("/", recipes.findAll);

  // Retrieve all recipes
  router.get("/last", recipes.findLast);

  // Retrieve a single recipe per title
  router.get("/:title", recipes.findOne);

  // Update a recipe with id
  router.put("/:title", recipes.update);

  // Delete a recipe with id
  router.delete("/:id", recipes.delete);

  // Get facts
  router.get("/facts", recipes.facts);

  // Add images to recipe by id
  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  app.use("/api/recipes", router);
};
