const whichSchool = (age) =>{
  if(age < 13){
    return('Elementary School');
  }else if(age >= 13 && age <= 18) {
    return('Secondary School');
  }else if(age >=19 && age < Infinity){
    return('Lighthouse Labs');
  }
}




console.log("I am 35. Which school should I go to?");
console.log(whichSchool(101));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));