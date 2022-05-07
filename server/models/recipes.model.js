module.exports = (sequelize, Sequelize) => {
  const Recipes = sequelize.define("recipes", {
    title: {
      type: Sequelize.STRING,
    },
    difficulty: { type: Sequelize.STRING },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Recipes;
};
