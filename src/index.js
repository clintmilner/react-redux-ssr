// ROOT FILE FOR SERVER

import express from 'express';
import renderer from './helpers/renderer';
const app = express();

app.use(express.static('public')); // public directory is available to browser

app.get('/', (req, res) => {
    res.send( renderer() );
});




app.listen(3000, () => {
    console.log('listening on port 3000');
});

