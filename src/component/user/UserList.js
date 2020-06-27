import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    state = {}
    render() {
        return (
            <>
                <User name="Mbr-Sagor" profession="Full-stack developer" />
                <User name="Apple" profession="CEO and Founder JTS" />
                <User name="Meg babu" profession="Student" />
            </>
        );
    }
}

export default UserList;
