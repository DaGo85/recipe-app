module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");
  const tag = require("../controllers/tag.controller.js");
  const uploadController = require("../controllers/upload");
  const upload = require("../middleware/upload");

  let router = require("express").Router();

  // Create a new recipe
  router.post("/", recipes.create);

  // Retrieve all recipes
  router.get("/", recipes.findAll);

  // Retrieve a single recipe with id
  router.get("/:id", recipes.findOne);

  // Update a recipe with id
  router.put("/:id", recipes.update);

  // Delete a recipe with id
  router.delete("/:id", recipes.delete);

  // Delete all recipes
  router.delete("/", recipes.deleteAll);

  // Create comment for recipe
  router.post("/comments", recipes.createComment);

  // Create comment for recipe
  router.get("/comments", recipes.findRecipeById);

  // Create new tag
  router.post("/tag", tag.create);

  // Retrieve all tags
  router.get("/tag", tag.findAll);

  // Retrieve tag with id
  router.get("/tag/:id", tag.findById);

  // Add recipe to a tag
  router.post("/tag/:id", tag.addRecipe);

  // Add images to recipe by id
  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  app.use("/api/recipes", router);
};
