import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';

router.use(bodyParser.urlencoded({extended: true}));

const router = express.Router();

let boardName;

router.get('/:id', (req,res) => {
    boardName = req.params.id;
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/createList.html');
});

router.post('/', (req,res) => {
    let listName = req.body.listName;
    let id = randomNumberGenerator();

    
});