//Model index for handling all models

const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");
require("dotenv").config();

//needed informations to create a db: user, password, host, dialect and db name
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    pool: {
      max: 100,
      min: 0,
      acquire: 15000,
      idle: 5000,
    },
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: 0,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.recipes = require("./recipe.model.js")(sequelize, Sequelize);

module.exports = db;
