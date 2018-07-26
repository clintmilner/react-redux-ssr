// ROOT FILE FOR SERVER
import express from 'express';
import renderer from './helpers/renderer';

const app = express();
const port = 3000;

app.use(express.static('public')); // public directory is available to browser

app.get('*', (req, res) => {
    res.send( renderer(req) );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});