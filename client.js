const { IP, PORT } = require('./constants');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {

  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  console.log("Successfully connected to game server");

  conn.on('data', function(data) {
    console.log("you ded cuz you idled");
 
    })

    conn.on('connect', () => {
      conn.write('Name: GUS');
    });






  return conn;

  
}

module.exports = {connect}; 

