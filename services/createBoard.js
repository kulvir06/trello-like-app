import db from '../utils/database';

class create{
    addBoard(name,membersOfBoard,id){
        return new Promise(async resolve => {
            try{
                const newBoard = await db.board.create({
                    name,
                    id,
                    membersOfBoard,
                    lists: null
                })
                 .then(() => console.log('new board created'))
                 .catch((err) => console.log('error occurred = '+err));  
                resolve(newBoard);              
            } catch(error) {
                console.log('error = '+err);
            }
        });
    }
}

module.exports = create;