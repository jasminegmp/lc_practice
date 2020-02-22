// what does this refer to?
// it depends 

//this keyword allows us choose which object is the one you're focusing on

// depends on 'where 'this' function invoked'. Where is 'this' invoked?

/*
Implicit Binding
// left of dot at invocation
*/
var sayNameFunction = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    }
}

var me = {
    name: 'Jasmine',
    age: 80
}

var you = {
    name: 'You',
    age: 70
}
sayNameFunction(me);
sayNameFunction(you);

// me is iinvocation, so it's the same as me.name instead of this.name
me.sayName()
you.sayName()

var Person = function(name){
    return {
        name: name,
        sayNames: function() {console.log(this.name)},
        dog: {
            name: 'jello',
            sayNames: function() {console.log(this.name)}
        }
    }
}

let john = Person('john');
john.sayNames();
john.dog.sayNames();

/*
Explicit Binding - explicitly state this
call - invoke function
apply - invoke function arg as array
bind - returns you a new function instead of invoking function
*/

let sayName_call = function(){
    console.log(this.name);
}

let sayName_apply = function(toys1, toys2){
    console.log(this.name + ' likes ' + toys1 + ' and ' + toys2);
}

var me = {
    name: 'Jellington',
    age: 80
}

let toys = ['ball', 'chew']


sayName_call.call(me);
sayName_apply.apply(me, toys);
let newFunc = sayName_apply.bind(me, toys[0], toys[1]);
newFunc();

/*
New binding
*/

var Dog = function(breed){
    this.breed = breed;
}
let chihuahua = new Dog('Chihuahua')

/*
Default binding 
- catach all case if none of that other rules work, which is if you're not using call(), apply(), or bind(), 'this' is the global object
- catch all case
*/


let windowObject = function(){
    console.log(this);
}
windowObject();
// prints your 'Window Object' if in the browser!
