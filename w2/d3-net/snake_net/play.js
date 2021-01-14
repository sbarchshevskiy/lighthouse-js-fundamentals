const net = require('net');
const server = net.createServer();
const stdin = process.stdin;



// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

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
  conn.on('data', (data) =>{
    console.log(data);
  });
  return conn;
}
//tutored code from Anil DM
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = (data) => {
  if('\u0003' === data){
    process.exit();
  }
};
console.log('Connecting ...');
connect();

module.exports = connect;
module.exports = setupInput;
module.exports = handleUserInput();