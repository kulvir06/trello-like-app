import Sequelize from 'sequelize';

const sequelize = new Sequelize('trelloDB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
