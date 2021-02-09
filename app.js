import database from './utils/database';
import express from 'express';
import user from './routes/user';
import board from './routes/board';
import list from './routes/list';
import card from './routes/card';

const exe  = async() => {
    await database.sequelize.sync();
}
exe();

const app = express();

app.use('/user',user);
app.use('/board',board);
app.use('/list',list);
app.use('/card',card);

app.listen(3000, () => { console.log('Server running on port 3000!'); });

