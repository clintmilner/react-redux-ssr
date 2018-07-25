const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {

    // Inform Webpack that we're building a bundle for nodeJS
    target: 'node',

    // Tell Webpack the root file of our Server App
    entry: './src/index.js',

    // Tell Webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell Webpack to exclude node_modules not used on the server
    externals: [webpackNodeExternals()]

};

module.exports = merge( baseConfig, config );