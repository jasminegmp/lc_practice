
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let col = grid[0].length;
    let row = grid.length;
    let minutes = 0;
    let queue = [];
    let fresh = 0;


    // queue with rotting oranges
    for(let r = 0; r < row; r++)
    {
        for(let c = 0; c < col; c++)
        {
            if (grid[r][c] === 1)
            {
                fresh++;
            }
            if (grid[r][c] === 2)
            {
                queue.push([r, c])
            }
        }
    }
    //find_neighbors(0, 0)
   // queue = [[2,1,1]]
    //console.log(queue)

    // go through popping off queue while checking if valid neighbor
    // for each valid neighbor, change neighbor to 2 if it is already 1
    while (fresh && queue.length > 0)
    {
        let dR = [0, -1, 0, 1];
        let dC = [-1, 0, 1, 0];
        let next = []
        while (queue.length !=0){
            let current = queue.shift();
            console.log("current", current)
            for(let i = 0 ; i < dR.length ; i++){
                let nR = current[0] + dR[i];
                let nC = current[1] + dC[i];
                if(nR >= 0 && nC >= 0 && nR < row && nC < col){
                    if (grid[nR][nC] === 1){
                        grid[nR][nC] = 2;
                        fresh--;
                        next.push([nR, nC])
                    }
                }

            }
        }
        minutes++;
        queue = next;

    }


    if (fresh !== 0){
        return -1
    }
    return minutes
    //console.log(grid)
};

iterations = orangesRotting([[2,1,1],[1,1,0],[0,1,1]])
console.log(iterations)