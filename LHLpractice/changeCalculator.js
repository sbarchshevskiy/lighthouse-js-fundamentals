const calculateChange = function(total, cash) {
  let totalChange = cash - total;


  let dollarConvertRounded = Math.floor(totalChange / 100);
  console.log('dollars rounded: ',dollarConvertRounded);
  let dollarConvertOriginal = totalChange / 100;
  let remainingCentsInQuarters = (100 * (dollarConvertOriginal % 100 - dollarConvertRounded)) / 25;
  console.log('quarters: ', remainingCentsInQuarters);
  let totalQuartersRounded = Math.floor(remainingCentsInQuarters);
  console.log('rounded quarters: ',totalQuartersRounded);
  let remainingDimes = totalQuartersRounded - remainingCentsInQuarters;
  if(remainingDimes < 0){
    let remainingNickels = 100 * (totalQuartersRounded - remainingCentsInQuarters) / 5;
    console.log('Nickels: ',remainingNickels)
  }else{
    console.log(remainingDimes)
  }

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));