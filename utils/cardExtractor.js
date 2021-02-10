import db from './database';

module.exports = async (listId) => {
    let data = await db.list.findOne({ where: { id: listId } });
    data = data.dataValues.cards;
    if (data === null) data = '';
    return data;
}