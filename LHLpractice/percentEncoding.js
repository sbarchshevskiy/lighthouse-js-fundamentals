const urlEncode = function(text) {
  let editedString = '';
  for (let i = 0; i < text.length; i++) {
    if(text[i] === ' '){
      editedString += '%20';
    }else{
      editedString += text[i];
    }
  }
  return editedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

