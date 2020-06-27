import React, { Component } from 'react';
import AuthService from './AuthService';
import { Redirect } from 'react-router-dom';

class Auth extends Component {

    state = {
        redirect: false
    }

    login() {
        AuthService.login(() => {
            this.setState({
                redirect: true
            })
        })
    }

    render() {

        if (AuthService.isLogin) return <Redirect to="/" />
        let { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.state.redirect) return <Redirect to={from} />

        return (
            <>
                <h2>Please first login</h2>
                <button onClick={this.login} className="btn btn-info btn-sm">Login</button>
            </>
        );
    }
}

export default Auth;
