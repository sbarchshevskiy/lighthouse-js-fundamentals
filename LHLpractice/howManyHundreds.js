const howManyHundreds = (data) =>{
  const divisible = 100;
  return Math.floor(data / divisible);
  // return data / divisible;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log()
console.log(howManyHundreds(1234));
console.log(howManyHundreds(123456));

console.log(howManyHundreds(55));




