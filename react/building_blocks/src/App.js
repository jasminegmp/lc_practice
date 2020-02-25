import React from 'react';
import FormTextSubmit from './FormTextSubmit';
import Parent from './ClassParentChild'
import Parent2 from './FunctionParentChild'
import Parent3 from './ClassChildParent'
import OpenBreweryInteraction from './OpenBreweryInteraction';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zipcode: null
    }
  }

  // callback function from data from text
  handleCallback = (zipcode) =>{
    this.setState({zipcode})
  }

  render(){
    return (
      <div className="App">
        <FormTextSubmit zipcodeCallback = {this.handleCallback}/>
        {this.state.zipcode ? <OpenBreweryInteraction zipcode = {this.state.zipcode}/> : null}
      </div>
    );
  }
}

export default App;
