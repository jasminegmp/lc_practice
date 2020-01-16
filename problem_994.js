
let get_neighbors = function(r,c, MAX_r, MAX_c){
    console.log("entered: ", r, c, MAX_r, MAX_c)
    let neighbors = [[r-1, c], [r+1, c], [r, c-1], [r, c+1]];
    let valid_neighbors = [];
    for (neighbor in neighbors){
        //console.log("neighbor", neighbors[neighbor])
        let row = neighbors[neighbor][0]
        let col = neighbors[neighbor][1]
        if ((row >= 0 && col >= 0 && row < MAX_r && col < MAX_c)){
          //  console.log("need to add:", neighbors[neighbor])
            valid_neighbors.push(neighbors[neighbor])
        }
    }
    //console.log("valid neighbors", valid_neighbors)
    return valid_neighbors
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minutes = 0;
    let queue = [];
    let fresh = 0;
    let rotten;
    let valid_neighbors = [];

    // queue with rotting oranges
    for(let r = 0; r < grid.length; r++)
    {
        for(let c = 0; c < grid[0].length; c++)
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
   
    // go through popping off queue while checking if valid neighbor
    // for each valid neighbor, change neighbor to 2 if it is already 1
    while (fresh && queue.length > 0)
    {
        console.log("queue:", queue)
        console.log("grid:", grid)
        console.log("fresh:", fresh)
        console.log("minutes:", minutes)
        next_queue = []
        // pop queue from front (FIFO)
        while(queue.length !=0 ){
            rotten = queue.shift(queue[0]);
            //console.log(rotten[0], rotten[1]);
            valid_neighbors = get_neighbors(rotten[0], rotten[1], grid.length, grid[0].length);
            // get neighbors of rotten
            console.log("valid_neighbors:" ,valid_neighbors)
            
                for (neighbor in valid_neighbors){
                    console.log("minutes:", minutes)
                    
                    // if valid neighbor is fresh, rot it
                    // add neighbors onto queue
                    let r = valid_neighbors[neighbor][0];
                    let c = valid_neighbors[neighbor][1];
                    console.log("r:", r, "c:", c, "grid[r][c]", grid[r][c])
                    if (grid[r][c] === 1)
                    {
                        console.log("r:", r, "c:", c, "grid[r][c]", grid[r][c])
                        grid[r][c]= 2;
                        fresh--;
                        next_queue.push([valid_neighbors[neighbor][0], valid_neighbors[neighbor][1]])
                        
                    }
                }
        }
        minutes++;
        queue = next_queue;
    }

    if (fresh > 0){
        return -1
    }
    return minutes
    //console.log(grid)
};

iterations = orangesRotting([[1,0]])
console.log(iterations)