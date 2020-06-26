import React, { Component } from 'react';

class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'green'
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })

        if (this.state.color.length <= 5) {
            this.setState({
                color : 'red'
            })
        }
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <h2 style={{ color: this.state.color }}>{this.state.count}</h2>
                <button onClick={() => this.decrement()}>-</button> <button onClick={() => this.increment()}>+</button>
            </>
        );
    }
}

export default Counter;
