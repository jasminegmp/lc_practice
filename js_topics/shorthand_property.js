// if name of property is the same as the variable, then you can omit the x: x
function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now()
    }
  }

// you can omit the function keyword completely

function formatMessage (name, id, avatar) {
    return {
      name,
      id,
      avatar,
      timestamp: Date.now(),
      save () { // <== from  save: function ()  initially
        //save message
      }
    }
  }


  