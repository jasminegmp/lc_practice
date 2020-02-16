// scoping
const obj = { foo: 1 }
obj.bar = 2
console.log(obj)

// This only returned in arrow functions
const obj2 = {
    outer: function() {
      const self1 = this
  
      const inner1 = () => {
        const self2 = this
  
        const inner2 = () => {
          const self3 = this
        }
      }
    }
  }
//self1 === self2 === self3

const obj3 = {
    outer: function() {
      const self1 = this
  
      function inner1() {
        const self2 = this
  
        function inner2() {
          const self3 = this
        }
      }
    }
  }
  //self1 !== self2 !== self3


///////////////////////////// Let vs var vs const
const KEY = 'white_rabbit';
if (true) {
  const KEY = 'ginger_rabbit'; 
}
console.log(KEY); // 'white_rabbit'

/* ERROR CASE 
let x = 42;
if (true) {
  console.log(x); // ERROR
  let x = 1337;
}
*/


/////////////// template literals - this only happens because we are using a var due to hoisting
var b = `bar ${a}`, a = `foo ${b}`;
console.log(); // outputs 'foo undefined' 

var myMap = new Map(),
    keyObj = {},
    keyFunc = function () {};

myMap.set(keyObj, "value for keyObj");
myMap.set(keyFunc, "value for keyFunc");

myMap.get(keyObj);  // "value for keyObj"
myMap.get(keyFunc); // "value for keyFunc"
console.log(myMap)

/////// weird legal quirks
var [first, , last] = [1,2,3];

function stuff(x, y=x/3) {
    // Do stuff..
  }
stuff(6);



