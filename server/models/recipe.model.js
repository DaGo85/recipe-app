module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipes", {
    username: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    ingredients: {
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        return this.getDataValue("ingredients").split(";");
      },
      set(val) {
        this.setDataValue("ingredients", val.join(";"));
      },
    },
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
