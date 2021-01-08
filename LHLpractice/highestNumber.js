const sumLargestNumbers = function(data) {
  for (let i = 0; i <data.length; i++) {
    for (let j = i +1; j <data.length ; j++) {
      if(data[j] === data [i] <0){
        let tempValue = data[i];
        data[i] = data[j];
        data[j] = tempValue;
        console.log(tempValue);
        break;
      }
    }
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));