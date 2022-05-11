module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("image", {
    url: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
  });
  return Image;
};
