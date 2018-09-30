import React, {Component} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

import FullOrder from './FullOrder/fullOrder';

import Order from './Order';

const searchingFor = (term) => {
    return (x) => {
        return x.number.toLowerCase().includes(term.toLowerCase()) || !term;
    }
};

class OrderList extends Component {

    constructor(props) {
        super(props);

        const orders = require('../../JSONfiles/orders');

        this.state = {
            orders: orders,
            posts: [],
            selectedPostId: null,
            term: '',
            currentPage: 1,
            ordersPerPage: 10,
        };

        this.handleClick = this.handleClick.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            const posts = response.data.slice(0, 6);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts});
        })
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    searchHandler(event) {
        this.setState({term: event.target.value})
    }

    postSelectedhandler = (id) => {
        this.setState({selectedPostId: id})
    };

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
                        onClick={this.handleClick}>
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
                                      clicked={() => this.postSelectedhandler(order.id)}
                                      key={order.id}/>;
                    })
                    : null}
                {this.state.term === '' ?
                    <div>
                        <Route path={this.props.match.url + '/:id'} exact component={FullOrder}/>
                        <ul>
                            {
                                this.state.posts.map((order, index) => {
                                return (
                                    <Link to={'/orders/' + order.id} key={order.id}>
                                        <Order brand={order.title}
                                               number={order.id}
                                               clicked={() => this.postSelectedhandler(order.id)}
                                        />
                                    </Link>
                                )
                            })}
                        </ul>
                        <ul className="pagination" id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
                    : null}
            </div>
        )
    }
}

export default OrderList;