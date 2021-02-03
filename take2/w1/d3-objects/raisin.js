const raisinAlarm = function(cookie) {
  const raisin = "🍇";
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === raisin) {
      return 'raisin alert';
    }
  }
  return 'all good';
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function(cookie) {
  let resultArray = [];
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i].includes("🍇")) {
      resultArray.push('raisin alert');
    } else {
      resultArray.push('all good');
    }
  }
  return resultArray;

};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));

