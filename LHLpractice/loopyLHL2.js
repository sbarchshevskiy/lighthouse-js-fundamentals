//loopy lhl exercise., 2

const loopyLighthouse = (range, multiples, words)=>{
  for (let i = range[0]; i <= range[1]; i++) {
    if(i % (multiples[0] * multiples[1]) === 0){
      console.log(words[0].concat(words[1]));
    }else if(i % multiples[0] === 0){
      console.log(words[0]);
    }else if(i % multiples[1] === 0){
      console.log(words[1]);
    }else{
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


//loopy lhl exercise., 1


// const checkIfLoopy = () =>{
//   for (let num = 100; num <= 200; num++) {
//     if(num % 12 === 0){
//       console.log("LoopyLighthouse");
//     }else if(num % 3 === 0){
//       console.log("Loopy");
//     }else if(num % 4 === 0){
//       console.log("Lighthouse");
//     }else{
//       console.log(num)
//     }
//   }
// }
//
// checkIfLoopy();