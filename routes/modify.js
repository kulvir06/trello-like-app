import express from 'express'
import bodyParser from 'body-parser';
import listIdExtractor from '../utils/listIdExtractor';
import modifyList from '../services/modifyList';
import cardIdExtractor from '../utils/cardIdExtractor';

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

let boardName, listName, cardName;

router.get('/:id1/:id2/:id3', (req,res) => {
    boardName = req.params.id1;
    listName = req.params.id2;
    cardName = req.params.id3;
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/modifyLists.html');   
});

router.post('/changename', async (req,res) => {
    const obj = new modifyList();
    let newName = req.body.newListName;
    let listId = await listIdExtractor(boardName, listName);
    await obj.changeListName(newName, listId);
});

router.post('/newcardname', async (req,res) => {
    const obj = new modifyList();
    let newName = req.body.newCardName;
    let cardId = await cardIdExtractor(listName,cardName);
    await obj.changeCardName(newName, cardId);
});

router.post('/newdescription', async (req,res) => {
    const obj = new modifyList();
    let newDesc = req.body.newDescription;
    let cardId = await cardIdExtractor(listName,cardName);
    await obj.changeCardDescription(newDesc, cardId);
});

router.post('/add', async (req,res) => {
    const obj = new modifyList();
    let email = req.body.email;
    let cardId = await cardIdExtractor(listName,cardName);
    await obj.addMember(email, cardId);
});

router.post('/delete', async (req,res) => {
    const obj = new modifyList();
    let email = req.body.email;
    let cardId = await cardIdExtractor(listName,cardName);
    await obj.deleteMember(email, cardId);
});

module.exports = router;