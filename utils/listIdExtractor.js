import db from './database';


module.exports = async (boardName, listName) => {
    let boardData = await db.board.findOne({ where: { name: boardName } });
    boardData = boardData.dataValues.lists;
    boardData = boardData.split(',');
 
    let id;

    let listData = await db.list.findAll({ where: { name: listName } });
    listData.forEach(element => {
        let src = element.dataValues.id;
        id = boardData.find(data => { return data === src; });
    });
    return id;
}