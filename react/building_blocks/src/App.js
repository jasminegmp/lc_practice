import React from 'react';
import FormTextSubmit from './FormTextSubmit';
import Parent from './ClassParentChild'
import Parent2 from './FunctionParentChild'
import Parent3 from './ClassChildParent'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zipcode: null
    }
  }

  render(){
    return (
      <div className="App">
        <FormTextSubmit/>
        <Parent/>
        <Parent2/>
        <Parent3/>
      </div>
    );
  }
}

export default App;
