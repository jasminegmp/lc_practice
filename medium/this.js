// what does this refer to?
// it depends 

//this keyword allows us choose which object is the one you're focusing on

// depends on 'where 'this' function invoked'. Where is 'this' invoked?

/*
Implicit Binding
// left of dot at invocation
*/

let myObject = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    }
}

// initialize 
let me = {
    name: 'Jasmine',
    age: 28
}

// initialize object
myObject(me);

// Invoke 'sayName' function
me.sayName();


let createUser = function(name){
    return{
        name,
        sayNames: function() {console.log(this.name)},
        dog: {
            name: 'Jello',
            sayNames: function() {console.log(name + "'s dog's name is " + this.name)}
        }
    }
}

// initialize object
let jasmine = createUser('Jasmine')
jasmine.sayNames(); // will console.log out 'Jasmine'
jasmine.dog.sayNames(); // will console.log out 'Jasmine's dog's name is Jello'


// explicit
// 'this' is the object you explicitly defined using a call(), apply() or bind() Javascript method.

//call
let john = {
    name: 'John',
}

hobbies = ['painting', 'cooking', 'biking'];

let setName2 = function(hobby0, hobby1){
    console.log(this.name + "'s hobbies are " +  hobby0 + " and " + hobby1);
}

setName2.call(john, hobbies[0], hobbies[1]);

//apply - invoke function arg as array
setName2.apply(john, hobbies);

// bind - when you want to set the this keyword but not invoke the function yet
let myFunction = setName2.bind(john, hobbies[0], hobbies[1]);
myFunction();


//
let Dog = function(breed){
    this.breed = breed;
}
let chihuahua = new Dog('Chihuahua');
console.log(chihuahua); // will output Dog { breed: 'Chihuahua' }

let windowObject = function(){
    console.log(this);
}
windowObject();
