const instructorWithLongestName = function(instructors) {
  let charsInName = 0;
  let longestName = '';
  for (let i = 0; i <instructors.length ; i++) {
    if(instructors[i].length > charsInName){
      charsInName = instructors[i].name.length;
      instructors[i].name = longestName;
      longestName = instructors.name;
      console.log(longestName);
    }
  }
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));