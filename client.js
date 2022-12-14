const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //prints any messages sent from the server
  conn.on("data", (message) => {
    console.log(message);
  });

  return conn;
};

module.exports = {connect,};