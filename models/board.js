module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        membersOfBoard: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        lists: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        freezeTableName: true
    });
    return Board;
}