const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {



  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
    
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

    const setupInput = function() {
      const stdin = process.stdin;
      stdin.setRawMode(true);
      stdin.setEncoding('utf8');
      stdin.resume();
      return stdin;
    }




  return conn;

  
}

module.exports = {connect}; 

