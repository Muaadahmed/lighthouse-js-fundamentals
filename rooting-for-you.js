const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 2,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 10,
      plumpness: 2
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 9
    }
  ]
  
const metric = 'redness'
// Iterate over each array
// find objects 

//Solution 1
function judgeVegetable(veggy, metric){
    let arr = [];
    for(let i = 0; i < veggy.length; i++){
        arr.push(veggy[i][metric]);
    }
    let maxValue = Math.max(...arr);
    for(let i = 0; i < veggy.length; i++){
        if(veggy[i][metric] == maxValue){
            return veggy[i].submitter;
        }
    }
    return arr;
}
//Solution 2

function ju(veggy, metric){
    let topMetric = veggy.sort((el2, el) => el[metric] - el2[metric]);
    return topMetric[0].submitter;
}
console.log(ju(vegetables, metric));