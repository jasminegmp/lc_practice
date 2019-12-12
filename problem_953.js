/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted (words, order) {
    let words_length = words.length;

    // go through every word in words array
    for (let i = 0; i < words_length - 1; i++)
    {
        // select two words to compare
        let word_1 = words[i];
        let word_2 = words[i+1];
        let not_complete = true;
        let j = 0;

        while(not_complete){

            // first check to see if char even exists 
            if (!word_1[j]  || !word_2[j] )
            {
                console.log('here');
                if(!word_1[j]){
                    return true;
                }
                else{
                    return false;
                }
                
            }

            // compare char by char
            if (order.indexOf(word_1[j]) > order.indexOf(word_2[j]))
            {
                not_complete = false;
                return false;
            }
            else if (order.indexOf(word_1[j]) < order.indexOf(word_2[j]))
            {
                not_complete = false;
            }
            else{
                j++;
            }
        }

    }
    return true;
};

words = ["hello","leetcode","row"];
order = "hlabcdefgijkmnopqrstuvwxyz";
let output = isAlienSorted(words, order);
console.log(output);