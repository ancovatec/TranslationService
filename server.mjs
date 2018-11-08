import express from 'express';
import bodyParser from 'body-parser';
import listeners from './listeners';
import routers from "./routes";

const app = express();
const port = 3000;

listeners();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(getUserSection);

app.get('/', (req, res) => res.send('Hello World!'));

routers.forEach(router => {
    app.use(router);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function getUserSection(req, res, next) {
    req.userId = 'a564s65s-d56fa4';
    next();
}
