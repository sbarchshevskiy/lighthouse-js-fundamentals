const concat = (arr1, arr2) =>{
  const arrayConcat = arr1.concat(arr2);
    return arrayConcat;
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));
console.log(concat([],[4,5,6]));
console.log(concat([],[]));