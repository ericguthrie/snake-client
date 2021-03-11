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

//     conn.on('connect', () => {
//       conn.write('Move: down');

// });

// setTimeout(() => {
//   conn.write('Move: right');
// }, 200);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 400);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 600);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 800);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 1000);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 1200);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 1400);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 1600);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 1800);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 2000);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 2200);

// setTimeout(() => {
//   conn.write('Move: right');
// }, 2400);




  return conn;

  
}

module.exports = {connect}; 

