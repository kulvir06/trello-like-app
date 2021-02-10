import db from '../utils/database';

class remove {
    deleteList(listIds,listName){
        return new Promise(async resolve => {
            try{
                listIds.forEach(async listId => {
                    const del = await db.list.destroy({ where: { id: listId, name: listName }})  
                     .then(() => console.log('list deleted'))
                     .catch((err) => console.log('error occured = '+err));
                    resolve(del);                                  
                });
            } catch(err) {
                console.log('error occured = '+err);
            }
        });
    }
}

module.exports = remove;