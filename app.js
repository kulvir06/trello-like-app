import database from './utils/database';

const exe  = async() => {
    await database.sequelize.sync();
}
exe();