const titleCase = function(sentence) {
  if(sentence === '') {
    return '';
  }
  let lowC = sentence.toLowerCase().split(' ');
  for (let i = 0; i < lowC.length; i++) {
    lowC[i] = lowC[i][0].toUpperCase() + lowC[i].slice(1);
  }
  return lowC.join(' ');
};


