import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';
import listExtractor from '../utils/listExtractor';
import createList from '../services/createList';

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

module.exports = router;