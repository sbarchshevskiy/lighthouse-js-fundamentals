const finalPosition = (moves) => {
  // let xAxis = 0;
  // let yAxis = 0;
  let xAndY = [0,0];
  for(const move of moves){
    if(move === 'north'){
        xAndY[1] += 1;
    }if(move === 'south'){
        xAndY[1] -= 1;
    }if(move === 'west'){
        xAndY[0] -= 1;
    }if(move === 'east'){
        xAndY[0] += 1;
    }
  }
  return xAndY;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));