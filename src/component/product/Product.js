import React, { Component } from 'react';

class Product extends Component {

    render() {
        return (
            <>
                <h3>Product Name: {this.props.name}</h3>
                <p>price: {this.props.price}</p>
                <p>Category: {this.props.category}</p>
                <hr />
            </>
        );
    }
}

export default Product;
