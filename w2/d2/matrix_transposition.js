// Put your solution here

//this was collaborated effort with Rafin during co-pilot session.


const transpose = function(matrix) {
let newMatrix = [];
const rows = matrix.length;
const cols = matrix[0].length;
for (let i = 0; i < cols; i ++) {
  newMatrix[i] = [];
};
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++){
    newMatrix[j][i] = matrix[i][j];
  }
};
return newMatrix;
};
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}
printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));
console.log('----')
printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));
console.log('----')
printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));