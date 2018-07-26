// ROOT FILE FOR SERVER
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const port = 3000;

app.use(express.static('public')); // public directory is available to browser

app.get('*', (req, res) => {
    const store = createStore();

    // some logic to initialize and load data
    // into this store
    res.send( renderer(req, store) );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});