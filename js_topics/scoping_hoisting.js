// scope
// defines what values are visible
// can be a global scope or local scope
/*
let global = 'I see global.'
function scopeFunction(){
    console.log(global);
}
scopeFunction(); // outputs 'I see global.'



function myFunction(){
    var localFunction = 'I see local';
    console.log(localFunction); 
}
myFunction(); // outputs 'I see functional scope'
//console.log(localFunction); // Error: localFunction is not defined


/*

// hoisting - JS moves declarations (NOT definitions) to the top of its scope
// if not defined will initialize variable as undefined

var a = `foo ${b}`, b = `bar ${a}`;
console.log(a);
//output 'foo' and then 'undefined'? 

//output 'foo bar undefined'?:
var b = `bar ${a}`, a = `foo ${b}`;
console.log(a);

*/


// var, let, const are "hoisted"

//  var will init declarations to undefined


// let and const are hoisted BUT stay uninitialzed and you get a "reference error"
// this is called a temporal deadzone
function myFunction2(){
    a // ReferenceError: Cannot access 'a' before initialization
    console.log(a)
}
myFunction2(); 



//so from a hoisting perspective, no difference but there is a difference from the usecase persepctive


// useeee
// https://www.interviewcake.com/question/javascript/js-scope
// https://tylermcginnis.com/var-let-const/?fbclid=IwAR3zI3p0HtrpvfPdxjXlr44mZE6YvH2bSPRfREgS9bJmOsyM9H3-UPLLEgY
