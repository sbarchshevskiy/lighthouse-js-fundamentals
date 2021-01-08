const repeatNumbers = data => {
  let convertedData = "";
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data[i][1]; j++){
      convertedData += data[i][0];
    }
    if(i < (data.length - 1)){
      convertedData += ",";
    }
  }
  return convertedData;
}

console.log(repeatNumbers([[1, 6]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));