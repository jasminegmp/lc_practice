/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {

    // first create hash map.
    let mapping = {};
    mapping['('] = ')';
    mapping['{'] = '}';
    mapping['['] = ']';

    let stack = [];
    let array_s = s.toString();
    for (let i = 0; i < array_s.length; i++){
        
        // If opening parenthesis, place in stack
        if (array_s[i] in mapping){
            stack.push(array_s[i]);
        }
        //otherwise, pop off stack and see if mapping matches
        else{
            let popped_str = stack.pop();
            if (array_s[i] !== mapping[popped_str])
            {
                return false;
            }
        }

    }

    //make sure all items were popped off stack
    if (stack.length === 0){
        return true;
    }
    else{
        return false;
    }
    
};

input = "[(){}]";
let output = isValid(input);
console.log(output);