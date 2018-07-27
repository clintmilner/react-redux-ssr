// ROOT FILE FOR SERVER
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
const port = 3000;

app.use(express.static('public')); // public directory is available to browser

app.get('*', (req, res) => {
    const reduxStore = createStore(); // redux store

    //takes the current request path, and look at routeConfig, and decide what needs to be rendered
    const promises = matchRoutes( Routes, req.path ).map( ({route}) => {
        return (route.loadData) ? route.loadData(reduxStore) : null;
    });

    console.log( promises );

    Promise.all( promises ).then( () => {
        res.send( renderer(req, reduxStore) );
    });


});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});