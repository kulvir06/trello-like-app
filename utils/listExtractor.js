import db from './database';

module.exports = async (boardName) => {
    let data = await db.board.findOne({ where: { name: boardName } });
    data = data.dataValues.lists;
    if (data === null) data = '';
    return data;
}