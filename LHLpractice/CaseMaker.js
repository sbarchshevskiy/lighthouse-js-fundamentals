const camelCase = function(input) {
  let finalString = '';
  for (let i = 0; i < input.length; i++) {
    if(input[i] !== ' '){
      finalString += input[i];
    }else if(input[i] === ' '){
      let spaceChar = input[i + 1].toUpperCase();
      finalString += spaceChar;
      i++;
    }
  }
  return finalString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));