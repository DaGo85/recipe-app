const db = require("../models");
const Recipe = db.recipes;
const Tag = db.tag;

// Create and save new tag
exports.create = (tag) => {
  return Tag.create({
    name: tag.name,
  })
    .then((tag) => {
      console.log(">> Created Tag: " + JSON.stringify(tag, null, 2));
      return tag;
    })
    .catch((err) => {
      console.log(">> Error while creating Tag: ", err);
    });
};

// Find all tags todo
exports.findAll = () => {
  return Tag.findAll({
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
