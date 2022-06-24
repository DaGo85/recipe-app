//Recipes model for sequelize(MySQL)

module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipes", {
    username: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
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
      type: Sequelize.TEXT("long"),
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
    img: {
      type: Sequelize.TEXT("long"),
      allowNull: false,
      get() {
        return this.getDataValue("img").split(";");
      },
      set(val) {
        this.setDataValue("img", val.join(";"));
      },
    },
  });

  return Recipe;
};
