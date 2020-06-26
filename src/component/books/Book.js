import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';

class Book extends Component {

    state = {
        is_editable: false
    }

    changeKeyPressHandler = (event) => {
        // console.log(event.key)
        if (event.key === 'Enter') {
            this.setState({
                is_editable : false
            })
        }
    }

    render() {

        let input_book = this.state.is_editable ?
            <input
                onChange={(e) => this.props.changeHandler(e.target.value, this.props.book.id)}
                onKeyPress={this.changeKeyPressHandler}
                type='text'
                value={this.props.book.name} />
            : <span>{this.props.book.name}</span>

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {input_book}
                                <span className="d-flex">${this.props.book.price}
                                    <div className="action_icon ml-5">
                                        <span onClick={() => this.props.deleteHandler(this.props.book.id)}><FeatherIcon icon="trash" /></span>
                                        <span onClick={() => this.setState({ is_editable: true })} className="ml-2"><FeatherIcon icon="edit-3" /></span>
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
