const sentence = "hello there from lighthouse labs";

const animateString = function(str) {
  let msIncrement = 50;
  let increase = msIncrement ++;
  for (let letter of str) {
    let tics = increase += msIncrement;
    setTimeout(() => {
      process.stdout.write(letter);
    }, tics);
  }
};
animateString(sentence);