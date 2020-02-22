// go from array to any other data type
// let's say we have a user database with the following array
const users = [
    { id: 382981, name: 'John', age: 33, job: 'Electrician'},
    { id: 123784, name: 'Sandy', age: 45, job: 'Archaeologist'},
    { id: 984727, name: 'Jane', age: 38, job: 'Chef'},
    { id: 483820, name: 'Bob', age: 57, job: 'Nurse'},
    { id: 539382, name: 'Cora', age: 29, job: 'Teacher'}
];

// i'm only going to use array methods that do not mutate the original array

// array -> array
// 1. filter/////////////////////////////////////////////////////////////////////////////
// let's say we want only users 40 and older
const olderThan40 = users.filter((user) =>{
    return user.age >= 40
})

console.log(olderThan40);
/*
Data looks like this

olderThan40 = [
  { id: 123784, name: 'Sandy', age: 45, job: 'Archaeologist' },
  { id: 483820, name: 'Bob', age: 57, job: 'Nurse' }
]
*/

// array -> array
// 2. map//////////////////////////////////////////////////////////////////////////////
// let's say i want a new array with just the user's IDs
const usersId = users.map((user) =>user.id)

/*
Data looks like this
usersId:
[ 382981, 123784, 984727, 483820, 539382 ]
*/
console.log(usersId)

// 3. reduce //////////////////////////////////////////////////////////////////////////////
// array.reduce(callback, initialValue);


//array -> obj
// example 1. let's say we want the users data but only the age and job titles of each title
let usersAgeJob = [];
const getJobAndAgeData = users.reduce((data, user) => {
        usersAgeJob.push({age: user.age, job: user.job})
        return usersAgeJob;
}, {})
console.log(getJobAndAgeData)
/*
[
  { age: 33, job: 'Electrician' },
  { age: 45, job: 'Archaeologist' },
  { age: 38, job: 'Chef' },
  { age: 57, job: 'Nurse' },
  { age: 29, job: 'Teacher' }
]
*/



//array -> obj
// example 2. let's say we want to change the object structure so that the name of the property is the id and all other associated data is in object
const modifiedUsers = users.reduce((data, user) => {
        data[user.id] = {name: user.name, age: user.age, job: user.job};
        return data;
}, {})
console.log(modifiedUsers)
/*
{
  '123784': { name: 'Sandy', age: 45, job: 'Archaeologist' },
  '382981': { name: 'John', age: 33, job: 'Electrician' },
  '483820': { name: 'Bob', age: 57, job: 'Nurse' },
  '539382': { name: 'Cora', age: 29, job: 'Teacher' },
  '984727': { name: 'Jane', age: 38, job: 'Chef' }
}
*/


//array -> obj
// example 3. let's say we want to get the total age of our users and the number of users we have in our database
const usersInfo = users.reduce((data, user) => {
    data.users += 1;
    data.totalAge += user.age;
    return data
}, {users: 0, totalAge: 0})
console.log(usersInfo)
/*
{ users: 5, totalAge: 202 }
*/

// array -> int
// let's say we want to get the total number of users and that's it
const numOfUsers = users.reduce((total, user) => {
    total += 1;
    return total
}, 0)
console.log(numOfUsers);
/*
5
*/

// array -> int
// let's say we want to get the age total
const usersAgeTotal = users.reduce((total, user) => {
    return total + user.age
}, 0)
console.log(usersAgeTotal);
/*
202
*/
