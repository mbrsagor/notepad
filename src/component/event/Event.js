import React, { Component } from 'react';

class Event extends Component {

    state = {
        name: ''
    }

    clickMe = (event) => {
        
    }

    onChangeHandeler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <input onChange={this.onChangeHandeler} type="text" placeholder="Enter your name" />
                <button onClick={this.clickMe}>Click Me</button>
                <br />
                <p> Hello, {this.state.name} </p>
                <p>{ this.state.name }</p>
            </>
        );
    }
}

export default Event;

