const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 31;

const carPassing = (cars, speed) =>{
  let carPassingArray = [];
  const currentTime = Date.now();
  carPassingArray.push({
    "time": currentTime,
    "speed": speed
  });
  return cars.concat(carPassingArray);
}
console.log(carPassing(cars, speed));

