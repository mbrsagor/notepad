import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';

class Book extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {this.props.name}
                                <span className="list-group-item d-flex justify-content-between align-items-center">{this.props.price}</span>
                                <FeatherIcon icon="trash" />
                                <FeatherIcon icon="edit-3" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;
