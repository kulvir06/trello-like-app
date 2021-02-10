import db from '../utils/database';


module.exports = async (boardName, listName) => {
    let data = await db.board.findOne({ where: { name: boardName } });
    data = data.dataValues.lists;
    data = data.split(',');
    let key;
    // let listId, key, shouldSkip = false;
    await data.forEach(async element => {
        let x = await db.list.findOne({ where: { name: listName, id: element } });   
        if(x!=null) { key = element; console.log(key); }        
    });
    return key;
    // return await db.list.findOne({ where: { id: key } });
}