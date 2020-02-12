// Promise APIs

// How do you create a promise?
// how do you change the status of a promise?
// how do you listen for when the status of a promise changes?
const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
            //resolve() // fulfilled
            reject() // rejected
    }, 2000)˜
})

function onSuccess() {
    console.log('success!')
}

function onError (){
    console.log("error!")
}


promise.then(onSuccess)
promise.catch(onError)



