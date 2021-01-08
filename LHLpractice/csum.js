// const conditionalSum = function(values, condition) {
//   let sum = 0;
//   for (let i = 0; i < values.length; i++) {
//       if(values[i] % 2 === 0 && condition === 'even'){
//         sum += values[i];
//         // console.log(sum);
//       }else if(values[i] % 2 !== 0 && condition === 'odd'){
//         sum += values[i];
//         // console.log(sum)
//       }
//     }
//   return sum;
// };
//
// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));


const sumLargestNumbers = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
    const sortedArray = data;
    for (let j = 0; j < sortedArray.length; j++) {
      console.log(sortedArray[j-2]+=[j-1]);
      // const additionArray = [];
      // console.log(additionArray.push[j-2] += [j-1]);
      // break;
    }
  }
}
console.log(sumLargestNumbers([1, 10])); //reads 11
console.log(sumLargestNumbers([1, 2, 3])); //reads 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //reads 126

//hasn't been finished, I'll get back to that topic later.