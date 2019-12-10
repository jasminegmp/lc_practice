/**
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {

    let digLog = []; // digital log
    let letterLog = []; // sorted log

    // first split up logs into digital logs or letter logs
    // You can check the first non-alphanumeric character to see if it's a digital log or letter log
    for(let idx of logs){
        if (idx.split(' ')[1].charAt(0) >= '0' && idx.split(' ')[1].charAt(0) <= '9')
        {
            digLog.push(idx);
        }
        else{
            letterLog.push(idx);
        }
    }

    // Now sort letter log based on its alphanumeric
    letterLog.sort((str1, str2) =>{

        let refStr = str1.slice(str1.indexOf(' ')+1);
        let compareStr = str2.slice(str2.indexOf(' ')+1)

        // compares two strings to see which goes first
        // if they are equal (localeCompare returns 0), compare identifier
        let result = refStr.localeCompare(compareStr)

        if (result === 0){
            let refStr = str1.slice(0, str1.indexOf(' '));
            let compareStr = str2.slice(0, str2.indexOf(' '))
            return result = refStr.localeCompare(compareStr)
        }
        // no tie, therefore you can get the sorted result
        else{
            return result;
        }
    });


    return letterLog.concat((digLog));
};

input = ["g1 act car", "ab1 off key dog", "a2 act car"]
let output = reorderLogFiles(input);
console.log(output)