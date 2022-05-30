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
    tags: {
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("tags").split(";");
      },
      set(val) {
        this.setDataValue("tags", val.join(";"));
      },
    },
  });

  return Recipe;
};
