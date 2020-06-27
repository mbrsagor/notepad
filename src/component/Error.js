import React, { Component } from 'react';

class Error extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3 mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">
                                    Sorry! 404 not found
                                </h5>
                            </div>
                            <div className="card-body">
                                <a className="btn btn-info" href="/">Back to home page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;
