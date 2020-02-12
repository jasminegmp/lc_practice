function add(x,y){
    return x+y
}
function higherOrderFunction(x, callback){
    return callback(x, 5)
}

let output = higherOrderFunction(2, add)
console.log(output)