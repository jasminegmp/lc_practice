var text = 'uololooo';

// With ES6
[...text].forEach(c => console.log(c))

// With the `of` operator
for (const c of text) {
    console.log(c)
}

// With ES5
for (var x = 0, c=''; c = text.charAt(x); x++) { 
    console.log(c); 
}

// ES5 without the for loop:
text.split('').forEach(function(c) {
    console.log(c);
});