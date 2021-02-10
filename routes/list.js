import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';
import listExtractor from '../utils/listExtractor';
import createList from '../services/createList';
import deleteList from '../services/deleteList';

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

let boardName;

router.get('/:id', (req,res) => {
    boardName = req.params.id;
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/createList.html');
});

router.post('/', async (req,res) => {
    const obj = new createList();

    let listName = req.body.listName;
    let id = randomNumberGenerator();
    await obj.addList(id,listName);
    let lists = await listExtractor(boardName);  
    await obj.updateBoard(boardName, lists+id+',');       
});

router.get('/delete/:id1/:id2', async (req,res) => {
    const obj = new deleteList();
    let board = req.params.id1;
    let listName = req.params.id2;
    let listIds = await listExtractor(board);
    listIds = listIds.split(',');
    await obj.deleteList(listIds,listName);
})

module.exports = router;