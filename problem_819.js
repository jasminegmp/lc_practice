/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // split by non alpha numeric
    let word_array = paragraph.split(/\W+/);

    let m = new Map();
    for (word in word_array){
        
        //word_array[word] = word_array[word].replace(/[^0-9a-zA-Z]/g, '');
        // make all lowercase 
        word_array[word] = word_array[word].toLowerCase()
        console.log(word_array[word])

        // make sure word isn't a banned word
        if (!banned.includes(word_array[word])){
            // increase count (value) of key
            if (m.get(word_array[word])){

                m.set(word_array[word], m.get(word_array[word]) + 1)
            }
            else{
                m.set(word_array[word], 1)
            }
        }


    }
    //console.log(m)
    let max_word = [...m.entries()].reduce((a, e ) => e[1] > a[1] ? e : a);
    //console.log(max_word[0]); // this returns the key

    return max_word[0];

    
};

let paragraph = "a,d a, a, a, b,b,b,c, c"
let banned = ["a"]
output = mostCommonWord(paragraph, banned)
console.log(output)