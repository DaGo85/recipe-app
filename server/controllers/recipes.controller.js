const db = require("../models/index.js");

const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Create and save a new recipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a recipe
  const recipe = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  // Save recipe in the database
  Recipe.create(recipe)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the recipe.",
      });
    });
};

// Retrieve all recipes from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Recipe.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving recipes.",
      });
    });
};

// Find a single recipe with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Recipe.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find recipe with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving recipe with id=" + id,
      });
    });
};

// Update a recipe by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Recipe.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Recipe was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update recipe with id=${id}. Maybe recipe was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating recipe with id=" + id,
      });
    });
};

// Delete a recipe with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Recipe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Recipe was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete recipe with id=${id}. Maybe recipe was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete recipe with id=" + id,
      });
    });
};

// Delete all recipes from the database.
exports.deleteAll = (req, res) => {
  Recipe.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} recipes were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all recipes.",
      });
    });
};

// Find all published recipes
exports.findAllPublished = (req, res) => {
  Recipe.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
