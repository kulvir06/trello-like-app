import db from '../utils/database';

class create {
    addCard(id,name,description,assginedUser){
        return new Promise(async resolve => {
            try{
                const newCard = await db.card.create({
                    name,
                    id,
                    description,
                    assginedUser
                })
                 .then(() => console.log('new card added'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(newCard);
            } catch(error) {
                console.log('error = '+err);
            }
        });
    }

    updateList(cards, id){
        return new Promise(async resolve => {
            try{
                const addCard = await db.list.update({
                    cards
                }, { where: { id } })
                 .then(() => console.log('list updated'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(addCard);                 
            } catch(err) {
                console.log('error = '+err);
            }
        });
    }
}

module.exports = create;