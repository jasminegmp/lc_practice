function objectify (key, value) {
    return {
      [key]: value,
      key: 'foof'
    }
  }

console.log(objectify('name', 'Tyler')) // { name: 'Tyler' }