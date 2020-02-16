// for objects
const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
  };

  const bill = {
    ...adrian,
    fullName: 'Bill Gates',
    website: 'https://microsoft.com'
  };

  console.log(bill)


// for arrays
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1, 1, 2, 6,7,8];
console.log(numbers2)