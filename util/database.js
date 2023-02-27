const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop', 'root', 'S09111A655@r', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;