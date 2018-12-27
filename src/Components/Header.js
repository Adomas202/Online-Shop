import React from 'react';
import ProductList from './Product/ProductList';
import OrderList from './Order/OrderList';
import NewOrder from './Order/NewOrder';
import {Route, Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav">
                    <li><Link to="/" className="navbar-brand">Internetinė telefonų parduotuvė</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Produktų sąrašas</Link></li>
                    <li><Link className="nav-link" to={{
                        pathname: '/Orders'
                    }}>Užsakymų sąrašas</Link></li>
                    <li><Link className="nav-link" to={{pathname: '/newOrder'}}>Naujas uzsakymas</Link></li>
                </ul>
            </nav>
            <Route path="/" exact component={ProductList}/>
            <Route path="/Orders" component={OrderList}/>
            <Route path="/newOrder" component={NewOrder}/>
        </div>
    );
};

export default Header;