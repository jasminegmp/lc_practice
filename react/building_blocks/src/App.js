import React from 'react';
import FormTextSubmit from './FormTextSubmit'

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
        <FormTextSubmit onInput = {this.Form}/>
      </div>
    );
  }
}

export default App;
