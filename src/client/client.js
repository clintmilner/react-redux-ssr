// Startup point for the client side code

console.log('Client Side Code = client.js!');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));