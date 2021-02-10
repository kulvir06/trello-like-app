import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';
import createCard from '../services/createCard';
import listIdExtractor from '../utils/listIdExtractor';
import cardExtractor from '../utils/cardExtractor';

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

let boardName, listName;

router.get('/:id1/:id2', (req,res) => {
    boardName = req.params.id1;
    listName = req.params.id2;
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/createCard.html');
})

router.post('/', async (req,res) => {
    const obj = new createCard();
    let name = req.body.name;
    let description = req.body.description;
    let id = randomNumberGenerator();
    let email = req.body.users;
    await obj.addCard(id, name, description, email);

    let listId = await listIdExtractor(boardName, listName);

    let cardId = await cardExtractor(listId);

    await obj.updateList(cardId+id+',',listId);

});

module.exports = router;