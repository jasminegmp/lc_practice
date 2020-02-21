/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let output = []
    for (let i in A){
        output.push(A[i] * A[i])
    }
    return output.sort((a,b) => (a-b))
    
};

output =sortedSquares([-4,-1,0,3,10])
console.log(output)



const HiCal = function(schedule){

    // first sort by start time
    schedule.sort((a,b) => (a.startTime-b.startTime));

    //

}

output2 =  HiCal(   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ])

console.log(output2)