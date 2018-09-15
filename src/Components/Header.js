import React from 'react';
import ProductList from './ProductList';
import OrderList from './OrderList';
import {Route} from 'react-router-dom';

export const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Online Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="/">Products List</a>
                <a href="/Orders">Orders List</a>
            </nav>
            <Route path="/" exact component={ProductList}/>
            <Route path="/Orders" component={OrderList}/>
        </div>
    );
}

export default Header;