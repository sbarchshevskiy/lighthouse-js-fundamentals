const sumLargestNumbers = (data) => {
  let num = false;
  while (!num) {
    num = true;
    for (let i = 1; i < data.length; i += 1) {
      if (data[i - 1] > data[i]) {
        num = false;
        let temp = data[i - 1];
        data[i - 1] = data[i];
        data[i] = temp;
      }
    }
  }
  return data[data.length- 1] + data[data.length - 2];
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));