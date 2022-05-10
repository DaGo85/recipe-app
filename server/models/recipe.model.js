module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipe", {
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
  return Recipe;
};
