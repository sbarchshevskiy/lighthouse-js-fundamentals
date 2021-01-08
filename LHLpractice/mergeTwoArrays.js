const merge = (array, array2)=>{
  const array3 = array;
  for (let i = 0; i < array2.length ; i++) {
    array3.push(array2[i]);
  }
  return array3.sort();
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));
console.log(merge([ ], []));
console.log(merge([1, 5, 9], [2, 8]));

