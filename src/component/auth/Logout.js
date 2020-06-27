import React, { Component } from 'react';
import AuthService from './AuthService';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        AuthService.logout(() => {
            this.setState({ redirect: true })
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to="/" />
        } else {
            return <h1>Loging Out ....</h1>
        }
    }
}

export default Logout;
