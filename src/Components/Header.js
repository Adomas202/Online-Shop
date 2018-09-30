import React from 'react';
import ProductList from './Product/ProductList';
import OrderList from './Order/OrderList';
import {Route, Link, Switch} from 'react-router-dom';
import FullOrder from './Order/FullOrder/fullOrder';
import NewOrder from './Order/newOrder';

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav">
                    <li><Link to="/" className="navbar-brand">Internetinė telefonų parduotuvė</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/">Produktų sąrašas</Link></li>
                    <li><Link className="nav-link" to={{
                        pathname: '/orders/'
                    }}>Užsakymų sąrašas</Link></li>
                    <li><Link to={{
                        pathname: '/New-Order'
                    }}>Naujas užsakymas</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/New-Order" component={NewOrder}/>
                <Route path="/orders" component={OrderList}/>
            </Switch>
        </div>
    );
};

export default Header;