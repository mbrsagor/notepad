import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a class="navbar-brand" href="/">Learn with Sagor</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/counter">Counter</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/myform">Contact Form</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/post">Post</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/event">Event</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/userlist">Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/stateless">State-Less-component</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/productList">Product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mybook">Book</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/postform">Add New Item</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Nav;
