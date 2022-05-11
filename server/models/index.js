const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.recipes = require("./recipe.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);

db.tag.belongsToMany(db.recipes, {
  through: "recipe_tag",
  as: "recipes",
  foreignKey: "tag_id",
});
db.recipes.belongsToMany(db.tag, {
  through: "recipe_tag",
  as: "tags",
  foreignKey: "recipe_id",
});

db.recipes.hasMany(db.comments, { as: "comments" });

db.comments.belongsTo(db.recipes, {
  foreignKey: "recipeId",
  as: "recipe",
});

module.exports = db;
