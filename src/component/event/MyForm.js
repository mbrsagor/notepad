import React, { Component } from 'react';

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    ChangeHandeler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <>
                <input type="email"
                    style={{ width: '20%', padding: '5px' }}
                    onChange={this.ChangeHandeler}
                    placeholder="Subscribe me"
                />
                <h2>Email address : {this.state.email}</h2>
            </>
        );
    }
}

export default MyForm;
