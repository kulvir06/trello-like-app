module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
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
        cards: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        freezeTableName: true
    });
    return List;
}
