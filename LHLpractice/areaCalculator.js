const calculateRectangleArea = (width, height) => {
  while(width && height > 0){
    return width * height;
  }
}
const calculateTriangleArea = (base, height) => {
  while(base && height > 0){
    return (base * height) / 2;
  }
}
const calculateCircleArea = (radius) => {
  while(radius > 0){
    return (Math.pow(radius,2) * Math.PI);
  }
}

// console.log(calculateRectangleArea(10, 5));     // should print 50
// console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
// console.log(calculateRectangleArea(-1, 0));    // should print undefined
//
// console.log(calculateTriangleArea(10, 5)); // should print 25
// console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
// console.log(calculateTriangleArea(10, -5)); // should print undefined
// console.log(calculateTriangleArea(20, 50)); // should print undefined
console.log(calculateCircleArea(20)); // should print 314.159...
// console.log(calculateCircleArea(3.5)); // should print 38.484...
// console.log(calculateCircleArea(-1)); // should print undefined