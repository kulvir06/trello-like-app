module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        assginedUser: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
    
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        freezeTableName: true
    });
    return Card;
}
