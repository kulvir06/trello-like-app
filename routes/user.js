import express from 'express';
import createUser from '../services/createUser';

const router = express.Router();

let email, name;

router.get("/:id1/:id2", (req,res) => {
    email = req.params.id1;
    name = req.params.id2;
    console.log(email+name);
});

router.post("/", (req,res) => {
    const obj = new createUser();
    obj.addUser(email, name);    
});

module.exports = router ;
