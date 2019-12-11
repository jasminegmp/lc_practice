/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString (s) {
    let halfway;
    let temp;
    let str_len = s.length -1;
    if (s.length % 2 )
    {
        halfway = Math.floor(s.length / 2) + 1;
    }
    else
    {
        halfway = Math.floor(s.length / 2);
    }

    for(let i = 0; i < halfway; i++){
        temp = s[i];
        s.splice(i, 1, s[str_len - i]);
        console.log(temp, s, s[str_len - i], str_len, i);
        s.splice(str_len - i, 1, temp)
    }

    console.log(halfway);
    console.log(s)
    return s;
};

let input = ["h","e", "l", "l", "o"];
let output = reverseString(input);
console.log(output);