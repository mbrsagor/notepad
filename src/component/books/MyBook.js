import React, { Component } from 'react';
import Books from './Books';

class MyBook extends Component {
    state = {
        books: [
            { id: 1, name: 'Python', author: 'sagor', price: 155 },
            { id: 2, name: 'JavaScript', author: 'sagor', price: 180 },
            { id: 3, name: 'PHP', author: 'Ohi', price: 55 },
        ]
    }

    deleteHandler = (id) => {
        let new_book = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: new_book
        })
    }

    changeHandler = (name, id) => {
        let new_book = this.state.books.map(book => {
            if (id === book.id) {
                return {
                    ...book,
                    name
                }
            }
            return book
        })
        this.setState({
            books: new_book
        })
    }
    render() {
        return (
            <>
                <Books
                    changeHandler={this.changeHandler.bind(this)}
                    deleteHandler={this.deleteHandler.bind(this)}
                    books={this.state.books}
                />
            </>
        );
    }
}

export default MyBook;

