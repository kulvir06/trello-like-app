import db from '../utils/database';

class remove{
    deleteBoard(name){
        return new Promise(async resolve => {
            try{
                const del = await db.board.destroy({ where: { name } })
                 .then(() => console.log('board deleted'))
                 .catch((err) => console.log('error occured = '+err));
                resolve(del);
            } catch(err) {
                console.log('error occured = '+err);
            }
        })
    }
    deleteList(listIds){
        return new Promise(async resolve => {
            try{
                listIds.forEach(async listId => {
                    const del = await db.list.destroy({ where: { id: listId }})  
                     .then(() => console.log('list deleted'))
                     .catch((err) => console.log('error occured = '+err));
                    resolve(del);                                  
                });
            } catch(err) {
                console.log('error occured = '+err);
            }
        });
    }
    deleteBoardMember(email){
        return new Promise(async resolve => {
            try{
                const del = await db.board.destroy({ where: { membersOfBoard: email } })
                 .then(() => console.log('member removed'))
                 .catch((err) => console.log('error occured = '+err));
                resolve(del);
            } catch(err) {
                console.log('error occured = '+err);
            }
        });
    }
}

module.exports = remove;