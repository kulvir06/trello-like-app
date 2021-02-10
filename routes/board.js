import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';
import emailExtractor from '../utils/emailExtractor';
import createBoard from '../services/createBoard';
import deleteBoard from '../services/deleteBoard';
import listExtractor from '../utils/listExtractor';

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req,res) => {
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/createBoard.html');
});

router.post('/', (req,res) => {
    const obj = new createBoard();
    let name = req.body.name;
    let members = emailExtractor(req.body.emails);
    let id = randomNumberGenerator();
    members.forEach(member => obj.addBoard(name,member,id));    
});

router.get('/delete/:id', async (req,res) => {
    let name = req.params.id;
    const obj = new deleteBoard();
    let listIds = await listExtractor(name);
    listIds = listIds.split(',');
    await obj.deleteList(listIds);
    await obj.deleteBoard(name);

});

let boardName;

router.get('/modify/:id', (req,res) => {
    boardName = req.params.id;
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/updateBoardMember.html')
});

router.post('/modify/deleteboardmember', async (req,res) => {
    const obj = new deleteBoard();
    await obj.deleteBoardMember(req.body.email);
});

router.post('/modify/addboardmember', async (req,res) => {
    const obj = new createBoard();
    await obj.addNewMember(req.body.email, boardName);
});

router.post('/modify/changename', async (req,res) => {
    const obj =  new createBoard();
    await obj.changeBoardName(req.body.name, boardName);
});

module.exports = router;