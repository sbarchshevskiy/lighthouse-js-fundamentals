const greeting = '4311o th3r3 w0r1d'



// const returnGreeting = (arg) => {
//   let delayedReturn = ''
//   let splitGreeting = greeting.split(' ');
//   for (let i = 0; i < splitGreeting.length; i++) {
//     delayedReturn = splitGreeting[i];
//     console.log(delayedReturn)
//
//   }
//
// }
// setTimeout(() => console.log(returnGreeting(greeting)), 1000);

const splitGreeting = greeting.split(' ');


const returnOneAtTime = (arg) => {
  setTimeout(returnOneAtTime, 1000);
}

const repeater = console.log(returnOneAtTime(greeting));
for (let i = 0; i < 3; i++) {
  console.log(repeater)
}