const isBalanced = function (input_str){
    if (input_str.includes(' ')){
        let temp = input_str.split(' ');
        input_str = temp.join('');
    }
    let sum = 0;
    for (let i = 0 ; i < input_str.length ; i++){
        if (input_str[i] === '}'){
            sum -= 1;
        }
        if (input_str[i] === '{'){
            sum += 1;
        }
        //console.log(sum)
        if (sum < 0){
            return false;
        }
    }
    //console.log(sum)
    if (sum === 0){
        return true;
    }
    return false;
}

console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // true
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false