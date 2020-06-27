import React, { Component } from 'react';
import Product from './Product';

class ProductLIst extends Component {
    state = {
        info: [
            { name: 'Laptop', price: 120000, category: 'tech' },
            { name: 'Computer', price: 20000, category: 'tech' },
            { name: 'Router', price: 3400, category: 'tech-2' },
        ],
    }
    render() {
        return (
            <>

                {/* <Product name={this.state.info[0].name} price={this.state.info[0].price} category={this.state.info[0].category} />
        <Product name={this.state.info[1].name} price={this.state.info[1].price} category={this.state.info[1].category} />
        <Product name={this.state.info[2].name} price={this.state.info[2].price} category={this.state.info[2].category} /> */}

                {this.state.info && this.state.info.map((i, index) => {
                    return <Product
                        key={index}
                        name={i.name}
                        price={i.price}
                        category={i.category}
                    />
                })}
            </>
        );
    }
}

export default ProductLIst;
