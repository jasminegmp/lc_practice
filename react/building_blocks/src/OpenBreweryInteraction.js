import React from 'react';
import axios from 'axios';

class OpenBreweryInteraction extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            zipcode: this.props.zipcode,
            result: null,
            loading: true
        }
    }

    componentDidUpdate(){
        let self = this;
        axios.post('http://127.0.0.1:5000/api/query_zipcode', this.props.zipcode)
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

    render(){
        return(
            <div>{this.props.zipcode}</div>
        )
    }
}

export default OpenBreweryInteraction;