const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

    // Tell Webpack the root file of our client-side code
    entry: './src/client/client.js',

    // Tell Webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }

};

module.exports = merge( baseConfig, config );