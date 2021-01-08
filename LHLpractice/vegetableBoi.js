const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const judgeVegetable = (vegetables, metric) =>{
  let metric2 = 'submitter'
  const chosenVegetable = vegetables.sort((a, b) => b[metric] - a[metric])
  // for (let i = 0; i < vegetables.length; i++) {
  // }
  return chosenVegetable[0][metric2];
}

console.log(judgeVegetable(vegetables, metric))
