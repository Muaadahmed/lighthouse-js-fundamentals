let arr = [0, 1, 2, 1, 2, 5, 5, 3, 8];

//return the index of the last occurence of an element
//function takes an array and a num:
//1. number of times the number shows up in the array.
function lastIndexOf(arr, num){
    let lastIndexArr = [];
    if(arr === [] || arr.find(el => el === num) === undefined){
        return -1;
    } else {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === num) {
                lastIndexArr.push(i);
            }
        }
    }
    return Math.max.apply(Math, lastIndexArr);
}

console.log(lastIndexOf(arr, 3));