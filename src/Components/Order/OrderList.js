import React, {Component} from 'react';
import Order from './Order';
import DB_CONFIG from '../../Config/config';
import firebase from 'firebase/app';

const searchingFor = (term) => {
    return (x) => {
        return x.number.toLowerCase().includes(term.toLowerCase()) || !term;
    }
};

class OrderList extends Component {

    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('orders');

        // const orders = require('../../JSONfiles/orders');

        this.state = {
            orders: orders,
            term: '',
            currentPage: 1,
            ordersPerPage: 10,
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

        const {orders, currentPage, ordersPerPage} = this.state;

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
                    <h6>Paieška pagal užsakymo numerį</h6>
                    <input type="text" className="form-control mr-sm-2 searchBar"
                           onChange={this.searchHandler}/>
                </form>
                {this.state.term !== '' ?
                    orders.filter(searchingFor(this.state.term)).map((order, index) => {
                        return <Order brand={order.brand}
                                      number={order.number}
                                      price={order.price}
                                      color={order.color}
                                      deliveryTime={order.deliveryTime}
                                      key={order.id}/>;
                    })
                    : null}
                {this.state.term === '' ?
                    <div><ul>
                        {currentorders.map((order, index) => {
                            return <Order brand={order.brand}
                                          number={order.number}
                                          price={order.price}
                                          color={order.color}
                                          deliveryTime={order.deliveryTime}
                                          key={order.id}/>;
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