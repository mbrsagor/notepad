import React, { Component } from 'react';

class PostForm extends Component {


    state = {
        name: '',
        email: '',
        password: '',
        bio: ''
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
    }

    render() {
        return (
            <div className="container text-left">
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="name">Enter Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    id="name"
                                    name="name"
                                    onChange={this.changeHandler}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Enter Your Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    id="email"
                                    name="email"
                                    onChange={this.changeHandler}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Enter Your Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="****************"
                                    id="password"
                                    name="password"
                                    onChange={this.changeHandler}
                                    value={this.state.password}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Enter Your Bio</label>
                                <textarea
                                    className="form-control"
                                    placeholder="About youself"
                                    name="bio"
                                    id="bio"
                                    cols="30"
                                    onChange={this.changeHandler}
                                    value={this.state.bio}
                                    rows="5">
                                </textarea>
                            </div>
                            <button className="btn btn-success">Send</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Your Information</h5>
                            </div>
                            <div className="card-body">
                                <p>Your name is: {this.state.name}</p>
                                <p>Your name is: {this.state.email}</p>
                                <p>Your name is: {this.state.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostForm;


