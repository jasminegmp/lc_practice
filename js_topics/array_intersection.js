let a = [1,2,3];
let b = [2,3,4,5]
let intersection = a.filter( x => b.indexOf(x) !== -1);
console.log(intersection)