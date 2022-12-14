const { keyBindings } = require("./constants");

//Definitions
let connection; // Stores the active TCP connection object.

//handler function to transmit the correct message on each input
const handleUserInput = (key) => {
  // ctrl + c will exit the program
  if (key === '\u0003') {
    process.exit();
  }
  //supported keys will execute their commands (defined in constants)
  connection.write(keyBindings[key]);
};
//Set up interface to handle user input using stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

//Exports
module.exports = {setupInput,};