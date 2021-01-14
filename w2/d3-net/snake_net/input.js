
let connection;

// const keysArray = {w : '\77', s : '\73', a : '\61', d : '\64' };

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key, conn);
  });
  return stdin;
}

const handleUserInput = (data, conn) => {
  if('\u0003' === data) {
    process.exit();
  } else if('w' === data) {
    conn.write('Move: up');
  } else if('s' === data) {
    conn.write('Move: down');
  } else if('d' === data) {
  conn.write('Move: right');
  } else if('a' === data) {
    conn.write('Move: left');
  } else if ('z' === data){
    conn.write('imsleepy')
  } else if ('c' === data){
    conn.write('imhungry')
  }
};

const specialMessages = (data, conn) => {

}
module.exports = {setupInput};

