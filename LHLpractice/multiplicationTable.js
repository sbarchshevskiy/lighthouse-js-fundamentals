const multiplicationTable = function(maxValue) {
  let numbers = '\n'
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      numbers += ((i * j ));
    }
  }
  return numbers += '\n';
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));