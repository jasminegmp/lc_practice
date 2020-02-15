/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let output = [];
    let x;
    let y;
    let solution = [];

    for(let i = 0 ; i < points.length ; i++){
        //console.log(points[i])
        x = points[i][0];
        y = points[i][1];
        output.push([Math.sqrt(x*x + y*y),x,y]);
    }
    output.sort((a, b) => a[0] - b[0])
    //console.log(output)
    
    for(let j = 0; j < K; j++){
        output[j].shift()
        //console.log(output)
        solution[j] = output[j]
    }
    //console.log(solution)
    return solution
};

kClosest([[1,3],[-2,2]], 1)