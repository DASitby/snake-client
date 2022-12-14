//Imports
const net = require("net");
const {connect,} = require('./client');

//Connect to server
console.log("Connecting ...");
connect();

//handler function to transmit the correct message on each input
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};
//Set up interface to handle user input using stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};