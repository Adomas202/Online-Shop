import React, { Component } from 'react';
import Order from './Order';

const searchingFor = (term) => {
    return (x) => {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
};

class OrderList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: orders,
            term: '',
            currentPage: 1,
            ordersPerPage: 3,
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

        const {orders, currentPage, ordersPerPage } = this.state;

        const indexOfLastProduct = currentPage * ordersPerPage;
        const indexOfFirstProduct = indexOfLastProduct - ordersPerPage;
        const currentorders = orders.slice(indexOfFirstProduct, indexOfLastProduct);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item">
                    <a
                    className="page-link"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </a>
                </li>
            );
        });

        return (
            <div>
                <form>
                    <input type="text"
                           onChange={this.searchHandler}/>
                </form>
                {this.state.term !== '' ?
                    orders.filter(searchingFor(this.state.term)).map((product, index) => {
                        return <Order name={product.name} product={product.name} key={product.id}/>;
                    })
                    : null}
                {this.state.term === '' ?
                    <div><ul>
                        {currentorders.map((product, index) => {
                            return <Order name={product.name} product={product.name} key={product.id}/>
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

export default OrderList;