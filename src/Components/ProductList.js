import React, { Component } from 'react';
import Product from './Product';
import PageNumbers from './PageNumbers';

const products =[
    {
        "name":"Tepalu keitimas",
        "type":"Greitas"
    },
    {
        "name":"Pavaru taisymas",
        "type":"Letas"
    },
    {
        "name":"Apziura",
        "type":"Labai greitas"
    },
    {
        "name":"Lempos keitimas",
        "type":"Greitas"
    },
];

const searchingFor = (term) => {
    return (x) => {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
};

class productList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            term: '',
            currentPage: 1,
            productsPerPage: 3,
        };

        this.handleClick = this.handleClick.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    searchHandler(event) {
        this.setState({term: event.target.value})
    }

    render() {

        const {products, currentPage, productsPerPage } = this.state;

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div><a
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </a></div>
            );
        });

        return (
            <div>
                <form>
                    <input type="text"
                           onChange={this.searchHandler}/>
                </form>
                {this.state.term !== '' ?
                    products.filter(searchingFor(this.state.term)).map((product, index) => {
                    return <Product key={index} name={product.name}/>;
                })
                : null}
                {this.state.term === '' ?
                    <div><ul>
                    {currentProducts.map((product, index) => {
                        return <Product key={index} name={product.name}/>
                    })}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul></div>
                : null}
            </div>
        );
    }
}

export default productList;