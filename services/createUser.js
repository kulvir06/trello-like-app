import db from '../utils/database';

class create{
    addUser(email, name){
        return new Promise(async resolve => {
            try {
                const newUser = await db.user.create({
                    email,
                    name
                })
                 .then(() => console.log('user added successfully'))
                 .catch((err) => console.log('error occurred = '+err));   
                resolve(newUser)           
            } catch (error) {
                console.log('error occurred  = '+error);                
            }
        });
    }
}

module.exports = create ;