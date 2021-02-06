import Sequelize from 'sequelize';
import sequelize from '../utils/database';

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    freezeTableName: true
});

module.exports = User;