// const personalData = [
//   ['Miranda', 1983, 2015],
//   ['Ferdinent', 1988, 2015],
//   ['Suzie', 1983, 2015],
//   ['Ali', 2015, 2015],
//   ['Jack', 2003, 2015]
// ]
//
// const ageCalculator = (personalData) =>{
//   for(const personalEntry of personalData){
//     let name = personalEntry[0];
//     let currentYear = personalEntry[2];
//     let yearOfBirth = personalEntry[1];
//     console.log(name + ' is ' + (currentYear -= yearOfBirth) + ' years old.');
//   }
// }
// console.log(ageCalculator(personalData));


const ageCalculator = (name, yearOfBirth, currentYear) =>{
  return name + ' is ' + (currentYear -= yearOfBirth) + ' years old.';
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Ali", 2015, 2015));
console.log(ageCalculator("Jack", 2003, 2015));
