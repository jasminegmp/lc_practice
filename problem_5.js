/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  //  console.log(s)
    let rev_str = ((s.split("")).reverse()).join("")
  //  console.log(rev_str)
   // console.log(s && rev_str)
    let current_max = [];

    let matrix = [];
    for(let i = 0; i < s.length ; i ++){
        let matrix_row = [];
        for(let j = 0; j < rev_str.length; j++){
            //console.log("s[i] rev_str[j]", s[i], rev_str[j])
            if (s[i] === rev_str[j]){
                if (matrix.length > 0){
                    //console.log("got here!", i, j, matrix)
                    
                    //console.log("i,j", i ,j, current_max, (1 + matrix[i-1][j-1]))
                    if (isNaN((1 + matrix[i-1][j-1]))){
                        matrix_row.push(1)
                    }
                    else{
                        matrix_row.push((1 + matrix[i-1][j-1]))
                        if (current_max[0] < (1 + matrix[i-1][j-1])){
                            current_max = [ (1 + matrix[i-1][j-1]),i,j]
                        }
                    }
                    
                }
                else{
                   // console.log("i,j@", i, j)
                    matrix_row.push(1);
                    current_max = [1, i, j]
                }
                
            }
            else{
                matrix_row.push(0);
            }
            //matrix.push([])
        }
        console.log("matrix row", matrix_row)
        matrix.push(matrix_row)
    }
    console.log(matrix, current_max)
    let output = ""
    // max location info in current_max (length, i start, j start)
    for(i = 0; i < current_max[0]; i++){
        output += s[current_max[1] - i]
    }
   // console.log(output)
    return output
};

let output = longestPalindrome("aacdefcaa");
console.log(output)