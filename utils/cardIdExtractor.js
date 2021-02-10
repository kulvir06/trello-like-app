import db from './database';


module.exports = async (listName, cardName) => {
    let data='';
    let listData = await db.list.findAll({ where: { name: listName } });
    listData.forEach(element => {
        data = data+element.dataValues.cards+',';
    });
    
    data = data.split(',');
      
    let id;

    let cardData = await db.card.findAll({ where: { name: cardName } });
    cardData.forEach(element => {
        let src = element.dataValues.id;
        id = data.find(ele => { return ele === src; });
    });
    return id;
}