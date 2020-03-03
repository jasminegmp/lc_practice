import React from 'react';

class Parent3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    // callback which takes child data I need
    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    // pass callback as a prop to child
    render(){
        const {data} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}/>
                {data}
            </div>
        )
    }
}

class Child extends React.Component{

    // call parent callback from child
    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "submit" value = "Submit"/>
            </form>
        </div>
        )
    }
}

export default Parent3;