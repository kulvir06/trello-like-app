import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';
import emailExtractor from '../utils/emailExtractor';

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

let boardName, listName;

router.get('/:id1/:id2', (req,res) => {
    boardName = req.params.id1;
    listName = req.params.id2;
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/createCard.html');
})

router.post('/', (req,res) => {
    let name = req.body.name;
    let description = req.body.description;
    let id = randomNumberGenerator();
    let email = emailExtractor(req.body.users);
    console.log(name+description+id+email);

});

module.exports = router;