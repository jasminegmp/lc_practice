import React from 'react';
import axios from 'axios';
import BreweryDisplay from './BreweryDisplay'

class OpenBreweryInteraction extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            zipcode: this.props.zipcode,
            result: null,
            loading: true
        }
    }

    componentDidMount(){
        const { zipcode} = this.state
        var myParams = {
            data: zipcode
        }
        let self = this;
        if (zipcode !== "") {
        axios.post('http://127.0.0.1:5000/api/query_zipcode', myParams)
        .then(function(response){
            //console.log(response);
            self.setState({result: response});
            self.setState({loading: false});
        //Perform action based on response
            })
            .catch(function(error){
                console.log(error);
        //Perform action based on error
            });
        }
    }

    render(){
        if(this.state.loading) {
            return(
                
                <div>loading</div>
            )
        }
        return(
            <div><BreweryDisplay result = {this.state.result}/></div>
        )
    }
}

export default OpenBreweryInteraction;