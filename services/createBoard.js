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
    addNewMember(email, board){
        return new Promise(async resolve => {
            try{
                const boardData = await db.board.findOne({ where: { name: board }});
                const newMember = await db.board.create({
                    name: boardData.dataValues.name,
                    lists: boardData.dataValues.lists,
                    id: boardData.dataValues.id,
                    membersOfBoard: email
                })
                 .then(() => console.log('new member created'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(newMember);                 
            } catch(err) {
                console.log('error occurred = '+err);
            }
        })
    }
}

module.exports = create;