import db from '../utils/database';

class create{
    addList(id, name){
        return new Promise(async resolve => {
            try{
                const newList = await db.list.create({
                    name,
                    id,
                    cards: null
                })
                 .then(() => console.log('new list created'))
                 .catch((err) => console.log('error occured = '+err));
                resolve(newList);
            } catch(error) {
                console.log('error = '+error);
            }
        })
    }

    updateBoard(boardName, lists){
        return new Promise(async resolve => {
            try{
                const addList = await db.board.update({
                    lists
                }, { where: { name: boardName } })
                 .then(() => console.log('board updated'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(addList);
            } catch(error) {
                console.log('error = '+error);
            }
        })
    }
}

module.exports = create;