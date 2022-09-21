//Sequelize db config

module.exports = {
  pool: {
    max: 5000,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
