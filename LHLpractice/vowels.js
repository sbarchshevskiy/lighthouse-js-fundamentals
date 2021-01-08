const numberOfVowels = function(data) {
  let vowelsList = 'aeiouAEIOU';
  let letterCounter = 0;
  for (let i = 0; i < data.length; i++) {
    if(vowelsList.indexOf(data[i]) !== -1){
      letterCounter +=1
    }
  }
  return letterCounter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));