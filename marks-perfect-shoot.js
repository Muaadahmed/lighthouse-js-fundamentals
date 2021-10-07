let arr = ['north', 'west', 'north', 'east', 'south', 'west', 'east'];

const finalPosition = function(moves){
    let coord = [0, 0];
    for(let i = 0; i < moves.length; i++){
        if(moves[i].toLowerCase() === 'north'){
            coord[1] += 1;
        } else if(moves[i].toLowerCase() === 'west'){
            coord[0] -= 1;
        } else if(moves[i].toLowerCase() === 'east'){
            coord[0] += 1;
        } else if(moves[i].toLowerCase() === 'south') {
            coord[1] -= 1; 
        }
    }
    return coord;
}

finalPosition(arr);