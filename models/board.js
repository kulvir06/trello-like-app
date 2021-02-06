import Sequelize from 'sequelize';
import sequelize from '../utils/database';

const Board = sequelize.define('Board', {
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
    membersOfBoard: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    lists: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
}, {
    freezeTableName: true
});

module.exports = Board;