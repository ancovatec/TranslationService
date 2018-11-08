import express from 'express';
import bodyParser from 'body-parser';
import AddLanguageHandler from './handlers/addLanguageHandler';
import listeners from './listeners';
import store from './store';

const app = express();
const port = 3000;

listeners();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(getUserSection);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/languages', (req, res) => {
    res.send(store.getLanguages());
});

app.post('/languages', (req, res) => {
    const handler = new AddLanguageHandler();
    const event = handler.Emit(req.body.language, req.body.country, req.body.tag, req.userId);
    res.send(`Added a language on event ${event.id}`);
});

app.get('/events', (req, res) => {
    res.send(store.getEvents());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function getUserSection(req, res, next) {
    req.userId = 'a564s65s-d56fa4';
    next();
}