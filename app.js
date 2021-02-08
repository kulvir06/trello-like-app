import database from './utils/database';
import express from 'express';
import user from './routes/user';
import board from './routes/board';

const exe  = async() => {
    await database.sequelize.sync();
}
exe();

const app = express();

app.use('/user',user);
app.use('/board',board);

app.listen(3000, () => { console.log('Server running on port 3000!'); });

