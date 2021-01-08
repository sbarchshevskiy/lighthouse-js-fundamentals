const lastIndexOf = (arrayData, searchIndex) =>{
  for (let i = 0; i < arrayData.length; i++){
    console.log()
  }
  return arrayData.lastIndexOf(searchIndex);
}


// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1)); // returns 3
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2)); //returns 4
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3)); // returns -1
// console.log(lastIndexOf([ 5, 5, 5 ], 5)); // returns 2
// console.log(lastIndexOf([], 3)); // returns -1

lastIndexOf([ 0, 1, 4, 1, 2 ], 2); //returns 4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3); //returns -1
lastIndexOf([ 5, 5, 5 ], 5); // returns 2

// const input  = [ 0, 1, 4, 1, 2 ];
//
// console.log(input.indexOf(2));