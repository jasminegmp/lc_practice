/*
Implicit Binding
*/
var sayNameFunction = function(obj){
    obj.sayName = function(){
        console.log(this.name);
    }
}

var me = {
    name: 'Jello',
    age: 80
}

var you = {
    name: 'Sunny',
    age: 70
}
sayNameFunction(me);
sayNameFunction(you);

me.sayName()
you.sayName()

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
Window binding - catch all case
*/
window.name = 'Sunny';


let sayName_windowbinding = function(){
    console.log(this.name);
}


sayName_windowbinding();

