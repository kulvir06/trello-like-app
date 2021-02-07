import database from './utils/database';
import express from 'express';
import user from './routes/user';

const exe  = async() => {
    await database.sequelize.sync();
}
exe();

const app = express();

app.use('/user',user);


app.listen(3000, () => { console.log('Server running on port 3000!'); });

