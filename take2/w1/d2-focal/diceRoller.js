const args = process.argv[2];

const rollDice = function(rolls) {
 
  let diceRoll = '';

  for (let i = 0; i < rolls; i++) {
    diceRoll += Math.floor(Math.random() * 6) + 1 + '  ';

  }
  return `you rolled ${rolls} timmes, result: ${diceRoll}`;
};

console.log(rollDice(args));

