import Sequelize from 'sequelize';
import sequelize from '../utils/database';

const Card = sequelize.define('Card', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assginedUser: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    freezeTableName: true
});

module.exports = Card;