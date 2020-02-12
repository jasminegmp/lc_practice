// object
function getUser() {
    return{
        name: 'Jasmine',
        location: 'California'
    }
}

let {name, location} = getUser();
console.log(name, location)

// array
let user = ['jello', '1', 'california'];
let [name2, age2, location2] = user;
console.log(name2, age2, location2);

// renaming properties
const newUser = {
    n: "sunny",
    a: "8"
}

const {n:name3, a:age3} = newUser;
console.log(name3, age3)

// solving the issue of having a million input arguments and using destructuring to solve the problem
function myFunction({a = 22, b = 'test', c = 'me', d = '', e = null, f = 1}){
    console.log(a,b,c,d,e,f)
}

myFunction({
    a: 1,
    b: 'hello',
    d: 'there',
    f: 23
})