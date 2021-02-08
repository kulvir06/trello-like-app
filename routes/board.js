import express from 'express';
import bodyParser from 'body-parser';
import randomNumberGenerator from '../utils/randomGen';

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req,res) => {
    res.sendFile('C:/Users/kulvir/Desktop/internship/trello-like-app/public/createBoard.html');
});

router.post('/', (req,res) => {
    let name = req.body.name;
    let members = req.body.emails;
    let id = randomNumberGenerator();
    console.log(name+members+id);

})

module.exports = router;