function getDate () {
    var date = new Date()
    return date
  }
  
getDate()
//console.log(date) // <-- error: date not in function

const declaration

//console.log(declaration) // <-- error: declaration is a const and tehrefore must have values assigned to it during init


function foo () {
    if (true) {
      const bar = 'oof'
    }
  
    //console.log(bar) // <-- error because const is block scoped 
  }
  
foo() 


  