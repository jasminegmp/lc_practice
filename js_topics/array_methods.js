// xxx - mutation
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding things to arrays


// .concat - Merges 2 or more arrays and does not mutate original array
const oldFriends = ['Jake', 'Mikenzi', 'Jessica']
const newFriends = ['Merrick', 'Cash']
const friends = oldFriends.concat(newFriends)
console.log(oldFriends); // ['Jake', 'Mikenzi', 'Jessica']
console.log(newFriends); //['Merrick', 'Cash']
console.log(friends); // [ 'Jake', 'Mikenzi', 'Jessica', 'Merrick', 'Cash' ]

// xxx .push - adds item to end of array.  you should use .concat more than .push because it mutates the original array!
const pushfriends = ['Jake', 'Mikenzi']
pushfriends.push('Jordyn') // 3
console.log(pushfriends) //['Jake', 'Mikenzi', 'Jordyn']




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Removing things from arrays



// .filter - creates a new array after filtering elements that don't pass test of a function
const tweets = [
    { id: 1, stars: 13},
    { id: 2, stars: 87},
    { id: 3, stars: 51 },
    { id: 4, stars: 19 },
  ]
const popularTweets = tweets.filter((tweet) => {
    return tweet.stars > 50
})
console.log(popularTweets) // [ { id: 2, stars: 87 }, { id: 3, stars: 51 } ]

// xxx .pop - removes last element of array and return. you should use filter more than .pop because it mutates the original array!
const popfriends = ['Jake', 'Mikenzi', 'Karl']
const removedPopFriend = popfriends.pop()
console.log(removedPopFriend) // Karl
console.log(popfriends) // ['Jake', 'Mikenzi']

// xxx .shift - removes first element of array and returns it. you should use filter more than .shift because it mutates the original array!
const shiftfriends = ['Karl', 'Mikenzi', 'Jake']
const removedShiftFriend = shiftfriends.shift()
console.log(removedShiftFriend) // Karl
console.log(shiftfriends) // ['Mikenzi', 'Jake']



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Looking for things in arrays




// .find - finds first element in array that satisfies test
const tweet = tweets.find((t) => t.id === 3)
console.log(tweet) // { id: 3, stars: 51 },

// .findIndex - returns index instead of element
const index = tweets.findIndex((t) => t.id === 3)
console.log(index) // 2

// .includes - determines if a value is in array
let result1 = friends.includes('Jake') // true
let result2 = friends.includes('Karl') // false
console.log(result1, result2)

// .every - returns true or false depending on if every element in array passes test given by function
const ages = [18,21,28,34,22]
const groupCanVote = ages.every((age) => {
  return age >= 18
})
const groupCanDrink = ages.every((age) => {
  return age >= 21
})
console.log(groupCanVote) // true
console.log(groupCanDrink) // false

// .some - determines if any element in array passes test given by function
const ages_car = [6, 14, 12, 22, 13]
const hasAdultSupervision = ages_car.some((age) => {
  return age >= 21
})
const canRentCar = ages_car.some((age) => {
  return age >= 25
})
console.log(hasAdultSupervision) // true
console.log(canRentCar) // false



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating an array


// .map - creates a new array (based on previous array)
const tweetIds = tweets.map((tweet) => tweet.id) // [1,2,3,4]
console.log(tweetIds)

// .forEach - same as .map but .forEach has no return value
friends.forEach((friend) => console.log(friend))

// .slice - creates a new array from a portion of existing array. does NOT mutate original array.
const slicefriends = ['Jake', 'Mikenzi', 'Jordyn', 'Cash', 'Leo']
const bestFriends = slicefriends.slice(1,4) // UP TO 4, not including 4
console.log(bestFriends) // ['Mikenzi', 'Jordyn', 'Cash']




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// string maniplation




// .join - turns all elements of an array into a string and returns it
const splitSentence = ['learn', 'react', 'at', 'tylermcginnis.com']
let result3 = splitSentence.join() // learn,react,at,tylermcginnis.com
let result4 = splitSentence.join(' ') // learn react at tylermcginnis.com
console.log(result3, "\n", result4)

// xxx .reverse - reverses order. NOTE: mutates original array.
const letters = ['a', 'b', 'c']
letters.reverse()
console.log(letters) // ['c', 'b', 'a']





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sort




// sort strings
const sortFriendsString = ['Jake', 'Jacob', 'Mikenzi', 'Alex']
sortFriendsString.sort()
console.log(sortFriendsString) // ["Alex", "Jacob", "Jake", "Mikenzi"]

// sort integers
const sortAges = [21, 19, 35, 38, 18, 23]
sortAges.sort((a,b) => a - b)
console.log(sortAges) // [18, 19, 21, 23, 35, 38]

// sort objects
const users = [
    { name: 'Jim', age: 28 },
    { name: 'Alex', age: 32 },
    { name: 'Mikenzi', age: 26 },
    { name: 'Christina', age: 42 },
  ]
// 1. by age (int)
users.sort((a,b) => a.age - b.age)
// 2. by name (character)
users.sort((a, b) => a.name > b.name)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REDUCE!
// take an array and transform it into anything (array, object, integer, anything) else!
// RULES:
//1) Am I transforming an array into another array just by removing some elements? Use .filter
//2) Am I transforming an array into another array? Use .map
// 3) Am I transforming an array into something other than another array? Use .reduce

// example 1 - array to int
function sum (arr) {
    // reduce first arg - function invoked for every element in array
    return arr.reduce((total, num) => {  // num conatains values arr, total is init 0 (from init value) and then whatever prev iteration returned
      return total + num
    }, 0) // reduce second arg - initial value
  }
sum([1,2,3]) // 6
/*
Initial Value: 0

First iteration:
  total: 0
  num: 1

Second iteration:
  total: 1
  num: 2

Third iteration:
  total: 3
  num: 3

No more elements in the array, return 3 + 3 which is 6.
*/

// example 2 - obj to obj
/* goal
[
    { name: 'Tyler', age: 28},
    { name: 'Mikenzi', age: 26},
    { name: 'Blaine', age: 30 }
] -> Length and age count -> { users: 3, ageTotal: 84}
*/

function getUserData (users) {
    return users.reduce((data, user) => {
      data.users += 1
      data.ageTotal += user.age
  
      return data
    }, { users: 0, ageTotal: 0 })
  }
  
  const users = [
   { name: 'Tyler', age: 28},
   { name: 'Mikenzi', age: 26},
   { name: 'Blaine', age: 30 }
  ]
  
  getUserData(users) // { users: 3, ageTotal: 84 }