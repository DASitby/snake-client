//Imports
const {connect,} = require('./client');
const {setupInput,} = require('./input');

//Connect to server
console.log("Connecting ...");

setupInput(connect());