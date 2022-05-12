const db = require("../models");
const Recipe = db.recipes;
const Tag = db.tag;

// Create and save new tag
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Save tag in the database
  Tag.create({
    name: req.body.name,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the tag.",
      });
    });
};

// Find all tags
exports.findAllTags = () => {
  Tag.findAndCountAll().then((data) => {
    res.send(data).catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while fetching the tags.",
      });
    });
  });
};

// Find all recipes by tag
exports.findAll = () => {
  Tag.findAll({
    include: [
      {
        model: Recipe,
        as: "recipes",
        attributes: ["id", "title", "description", "difficulty", "username"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((tags) => {
      return tags;
    })
    .catch((err) => {
      console.log(">> Error while retrieving Tags: ", err);
    });
};

// Find a tag for a given tag id
exports.findById = (id) => {
  return Tag.findByPk(id, {
    include: [
      {
        model: Recipe,
        as: "recipes",
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((tag) => {
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while finding Tag: ", err);
    });
};

// Add a recipe to a tag
exports.addRecipe = (tagId, recipeId) => {
  return Tag.findByPk(tagId)
    .then((tag) => {
      if (!tag) {
        console.log("Tag not found!");
        return null;
      }
      return Recipe.findByPk(recipeId).then((recipe) => {
        if (!recipe) {
          console.log("Recipe not found!");
          return null;
        }
        tag.addRecipe(recipe);
        console.log(`>> added recipe id=${recipe.id} to tag id=${tag.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding recipe to tag: ", err);
    });
};
