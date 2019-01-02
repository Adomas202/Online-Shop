import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

const searchingFor = (term) => {
    return (x) => {
        return x.brand.toLowerCase().includes(term.toLowerCase()) || !term;
    }
};

class productList extends Component {
    constructor(props) {
        super(props);

        const products = require('../../JSONfiles/products');

        this.state = {
            products: products,
            term: '',
            currentPage: 1,
            productsPerPage: 9,
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
                <li className="page-item"><a
                    className="page-link"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </a></li>
            );
        });

        return (
            <div>
                <form>
                    <h6>Paieška pagal telefono pavadinimą</h6><input className="form-control mr-sm-2 searchBar" type="text"
                                                                           onChange={this.searchHandler}/>
                </form>
                {this.state.term !== '' ?
                    products.filter(searchingFor(this.state.term)).map((product, index) => {
                        return <Product brand={product.brand}
                                        price={product.price}
                                        color={product.color}
                                        deliveryTime={product.deliveryTime}
                                        key={product.id}/>;
                    })
                    : null}
                {this.state.term === '' ?
                    <div><ul>
                        {currentProducts.map((product, index) => {
                            return <Product brand={product.brand}
                                            price={product.price}
                                            color={product.color}
                                            deliveryTime={product.deliveryTime}
                                            key={product.id}/>;
                        })}
                    </ul>
                        <ul className="pagination" id="page-numbers">
                            {renderPageNumbers}
                        </ul></div>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(productList);