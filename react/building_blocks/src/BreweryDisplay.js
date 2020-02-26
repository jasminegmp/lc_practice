import React from 'react';

class BreweryDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: this.props.result
        }
    }

    renderItems = (brewery, index) =>{
        return(
            <div>
                <a href = {brewery[13]}><h3>{brewery[6]}</h3></a>
                <h6>{brewery[1]}, {brewery[9]}</h6>
                <h5>{brewery[10]}</h5>     
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.state.result.data.data.map((brewery, index) => this.renderItems(brewery, index))}
            </div>
        )
    }
}

export default BreweryDisplay;