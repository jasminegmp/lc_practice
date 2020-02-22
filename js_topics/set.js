var mySet = new Set();

mySet.add(5);
mySet.add("something");

mySet.has(5);                // true
mySet.has("some" + "thing"); // true
mySet.has(32);               // false

console.log(mySet, mySet.size) // <<< size used to find length for sets