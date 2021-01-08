const calculateChange = function(total, cash) {
  let totalChangeInCents = cash - total;
  let changeObject = {};

  const currency = ['Twenty', 'Ten', 'Five', 'Toonie',
    'Loonie', 'Quarter', 'Dime', 'Nickle', 'Penny'];

  const currencyValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let result;
  for (let i = 0; i < currencyValues.length; i++) {
    result = Math.floor(totalChangeInCents/currencyValues[i]);
    if(result > 0){
      changeObject[currency[i]] = result;
      totalChangeInCents = totalChangeInCents % currencyValues[i];
    }
  }

  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));