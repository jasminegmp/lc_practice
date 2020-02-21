// in JS, everything but strings are mutable

const testString = 'mutable?';
testString[7] = '!';
// String is still 'mutable?'

// can freeze an object to make it immutable
const array  = [4, 9];
// Make it immutable
Object.freeze(array);
array[0] = 1;
// array is still [4, 9]