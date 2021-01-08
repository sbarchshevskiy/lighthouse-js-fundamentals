const spots = [
  ['s', 's', 's', 's', 's', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['S', 'r', 's', 'm', 'r', 's'],
  ['S', 'r', 's', 'm', 'R', 's'],
  ['S', 'r', 'S', 'M', 'm', 'S']
]

const whereCanIPark =  (spots, vehicle) => {
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j <spots[i].length; j++) {

      const spot = spots[i][j]

      console.log('spot :'+ spots[i][j])
      if(vehicle === 'regular' && spot === 'R' ){
        return [i, j]
      }else if(vehicle === 'small'){
        if(spot === 'R' || spot === 'S'){
          return [i, j]
        }
      }else if(vehicle === 'motorcycle' ) {
        if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [i, j]
        }
      }
    }
  }
  return false;
};

const vehicle = 'motorcycle';


const result  = whereCanIPark(spots, vehicle);

console.log(result)


