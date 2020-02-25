import React from 'react';

class FormTextSubmit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    onSubmit = (event) => {
        //alert("You submitted: " + this.state.input);
        this.props.zipcodeCallback(this.state.input);
        event.preventDefault();

    }

    onChange = (event) => {
        this.setState({input: event.target.value})
    }


    render(){
        return(
            <div>
                <h1>Input Form</h1>
                <form onSubmit = {this.onSubmit}>
                    <input type = "text" value = {this.state.input} onChange = {this.onChange}/>
                    <input type = "submit" value = "Submit"/>
                </form>
            </div>
        )
    }
}

export default FormTextSubmit;