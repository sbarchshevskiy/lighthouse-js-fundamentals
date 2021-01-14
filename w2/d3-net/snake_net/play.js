const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connection = connect();
setupInput(connection);



// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({
//     host: '135.23.222.131',
//     port: 50542
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');
//   conn.on('data', (data) =>{
//     console.log(data);
//   });
//   return conn;
// }
//tutored code from Anil DM

//
// console.log('Connecting ...');
// connect();

// module.exports = connect;
// module.exports = setupInput;
// module.exports = handleUserInput();