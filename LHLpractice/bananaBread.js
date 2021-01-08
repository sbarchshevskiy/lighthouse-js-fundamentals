const ingredients =
  ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

// let i = 0;
// while(i>0){
//   console.log(ingredients)
// } who the hell needs while loops


for (let i = 0; i <ingredients.length ; i++) {
  console.log(ingredients);
  break;
}

for(const eachIngredient of ingredients){
  console.log('for each '+ eachIngredient)
}