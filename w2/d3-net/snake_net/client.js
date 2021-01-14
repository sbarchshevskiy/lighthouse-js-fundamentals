const net = require('net');
const { IP, PORT } = require('./constants');

// const name = 'sb';
// const stdin = process.stdin;


const connect = function (){
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // conn.on('data', (data) => {
  //   return "Move: up"
  // })
  conn.setEncoding('utf8');
  conn.on('data', (data) =>{
    console.log(data);
  });
  conn.on('connect', () =>{
    conn.write('Name: SBA');
  });
  return conn;
}
//
// const moveSnake = () => {
//   conn.on()
// }

module.exports = {connect};

