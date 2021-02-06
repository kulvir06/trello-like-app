import Sequelize from 'sequelize';
import board from '../models/board';
import card from '../models/card';
import list from '../models/list';
import user from '../models/user';

const sequelize = new Sequelize('trelloDB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.board = board(sequelize,Sequelize);
db.card = card(sequelize,Sequelize);
db.list = list(sequelize,Sequelize);
db.user = user(sequelize,Sequelize);



module.exports = db;
