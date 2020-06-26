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
                                {this.props.book.name}
                                <span className="d-flex">${this.props.book.price}
                                    <div className="action_icon ml-5">
                                        <span onClick={() => this.props.deleteHandler(this.props.book.id)}><FeatherIcon icon="trash" /></span>
                                        <span className="ml-2"><FeatherIcon icon="edit-3" /></span>
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;
