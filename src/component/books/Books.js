import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    render() { 
        return (
            <>
                {this.props.books.map(book => {
                    return (
                        <Book
                            changeHandler={this.props.changeHandler}
                            deleteHandler={this.props.deleteHandler}
                            book={book}
                        />
                    )
                })
                }
            </>
        );
    }
}
 
export default Books;
