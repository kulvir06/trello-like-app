import Sequelize from 'sequelize';
import sequelize from '../utils/database';

const List = sequelize.define('List', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    cards: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    freezeTableName: true
});

module.exports = List;