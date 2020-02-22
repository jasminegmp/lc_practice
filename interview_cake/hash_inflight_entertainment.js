/*
Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/
const entertainmentStream = function (flightLength, movieArr) {
    let movieTable = {};
    for (let i = 0; i < movieArr.length ; i++){

        let firstMovieLength = movieArr[i];

       //first check to see if secondMovie exists exists
       let secondMovieLength = flightLength - firstMovieLength;
       if (secondMovieLength in movieTable){
         console.log(firstMovieLength, secondMovieLength)
         return true;
       }

        // else check to see if key exists in hash table
        // place it in hash table if it doesn't exist
        if (!(firstMovieLength in movieTable)){
            movieTable[firstMovieLength] = 1;  
        }
    }
    return false;
}

let flightLength = 120;
let movieArr = [80,20,30,60];
let output = entertainmentStream(flightLength, movieArr);
console.log(output);
