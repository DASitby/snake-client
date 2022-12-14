//Definitions
let connection; // Stores the active TCP connection object.

//handler function to transmit the correct message on each input
const handleUserInput = (key) => {
  // ctrl + c will exit the program
  if (key === '\u0003') {
    process.exit();
  }
  //w, a, s, and d will move the snake
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  //q, e, r, and f will trigger fun emotes
  if (key === 'q') {
    connection.write('Say: No fair!');
  }
  if (key === 'e') {
    connection.write('Say: Nice!');
  }
  if (key === 'r') {
    connection.write('Say: I won\'t lose!');
  }
  if (key === 'f') {
    connection.write('Say: Good Game!');
  }
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

module.exports = {setupInput,};