const net = require("net");
const {IP, PORT, Initials} = require('./constants');
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //commands to run on connection
  conn.on('connect', () => {
    conn.write(`Name: ${Initials}`);
    console.log('successfully connected to game sever');
  });

  //prints any messages sent from the server
  conn.on('data', (message) => {
    console.log(message);
  });

  return conn;
};

//Exports
module.exports = {connect,};