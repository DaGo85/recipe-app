module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipe", {
    username: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    ingredients: { type: Sequelize.STRING },
    difficulty: { type: Sequelize.STRING },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Recipe;
};
