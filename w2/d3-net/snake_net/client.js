const net = require('net');
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
    conn.write('name: sbs ');
  });
  return conn;
}
//
// const moveSnake = () => {
//   conn.on()
// }

setupInput()


console.log('Connecting ...');
connect();
