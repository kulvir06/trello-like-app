import db from '../utils/database';

class modify{
    changeListName(newname, listId){
        return new Promise(async resolve => {
            try {
                const change = await db.list.update({
                    name: newname
                }, { where: { id: listId } })
                 .then(() => console.log('list name changed'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(change);
            } catch (err) {
                console.log('error occurred = '+err);                
            }
        });
    }
    changeCardName(newname, cardId){
        return new Promise(async resolve => {
            try {
                const change = await db.card.update({
                    name: newname
                }, { where: { id: cardId } })
                 .then(() => console.log('card name changed'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(change);            
            } catch (err) {
                console.log('error occurred = '+err);              
            }
        });
    }
    changeCardDescription(newdesc, cardId){
        return new Promise(async resolve => {
            try {
                const change = await db.card.update({
                    description: newdesc
                }, { where: { id: cardId } })
                 .then(() => console.log('card description changed'))
                 .catch((err) => console.log('error occurred = '+err));
                resolve(change);            
            } catch (err) {
                console.log('error occurred = '+err);              
            }
        });
    }
    addMember(email, cardId){
        return new Promise(async resolve => {
            try {
                const cardData = await db.card.findOne({ where: { id: cardId } });
                let existingEmails = cardData.dataValues.assginedUser;
                existingEmails = existingEmails+','+email;
                
                const update = await db.card.update({
                    assginedUser: existingEmails
                }, { where: { id: cardId } })
                 .then(() => console.log('added user to card'))
                 .catch((err) => console.log('error occured = '+err));
                resolve(update);
            } catch (err) {
                console.log('error occurred = '+err); 
            }
        });
    }
    deleteMember(email, cardId){
        return new Promise(async resolve => {
            try {
                const cardData = await db.card.findOne({ where: { id: cardId } });
                let existingEmails = cardData.dataValues.assginedUser;
                existingEmails = existingEmails.split(',');
                let newEmails='';
                existingEmails.forEach(element => {
                    if(email!=element) newEmails = newEmails+element+',';                    
                });

                const update = await db.card.update({
                    assginedUser: newEmails
                }, { where: { id: cardId } })
                 .then(() => console.log('deleted user from card'))
                 .catch((err) => console.log('error occured = '+err));
                resolve(update);
            } catch (err) {
                console.log('error occurred = '+err); 
            }
        });
    }
}
module.exports = modify;