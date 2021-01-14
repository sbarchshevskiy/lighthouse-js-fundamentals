
//example from lecture:
//_____________________________
// const net = require('net');
// const stdin = process.stdin;
// const name = "sergey"
// // localhost
// // ip
// const client = net.createConnection({
//   host: '135.23.222.131',
//   port: 3001
// });
// stdin.setEncoding('utf8');
// client.setEncoding('utf8');
// client.write(`its me ${name}`, );
// stdin.on('data', (input) => {
//   client.write(`${name}: ${input}`);
// })
// // on('data') --- do something, when Data got recieved
// client.on('data', (data) => {
//   console.log(data);
// })

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// const { connect } = require('./client');

// const net = require('net');
//
// const connect = function (){
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
//
// console.log('Connecting ...');
// connect();
