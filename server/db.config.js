//Sequelize db config

module.exports = {
  pool: {
    max: 200,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
