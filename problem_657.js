/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle (moves) {
    let start = [0,0];

    for (let i = 0; i < moves.length; i++){
        //start
        //console.log(moves[i]);
        switch (moves[i]){
            case "U":
                start[1] += 1;
                break;
            case "D":
                    start[1] -= 1;
                break;
            case "R":
                    start[0] += 1;
                break;
            case "L":
                    start[0] -= 1;
                break;
            default:
                break;
        }
    }

    //console.log(start);
    if (start[0] === 0 && start[1] === 0){
        return true;
    }
    else{
        return false;
    }
};

let input = "DD";
let output = judgeCircle(input);
console.log(output);