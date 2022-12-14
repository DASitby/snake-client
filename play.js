//Imports
const {connect,} = require('./client');
const {setupInput,} = require('./input');

//Connect to server and setup input on connection object
console.log("Connecting ...");
setupInput(connect());