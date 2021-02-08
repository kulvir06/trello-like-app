import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';
import emailExtractor from '../utils/emailExtractor';
import createBoard from '../services/createBoard';

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


module.exports = router;