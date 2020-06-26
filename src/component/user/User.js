import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
            <>
                <h1>This is {this.props.name}</h1>
                <p>I am a {this.props.profession}</p>
                <hr />
            </>
        );
    }
}

export default User;
