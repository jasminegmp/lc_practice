function makeGreeting (name, email, id) {
    return `Hello, ${name}. We've emailed you at ${email}. Your user id is "${id}".` // <-- you HAVE to use backticks
  }

console.log(makeGreeting('Jasmine', 'jasmine@google.com', '123'))