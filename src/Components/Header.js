import React, {Component} from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../hoc/asyncComponent';

import OrderList from './Order/OrderList';
import Counter from './Counter/Counter';

const AsyncNewOrder = asyncComponent(() => {
    return import('./Order/newOrder');
});

class Header extends Component {
    state = {
        auth: true // This is for authentication, if the variable is false, then page is redirected
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="nav">
                        <li><Link to="/" className="navbar-brand">Internetinė telefonų parduotuvė</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/">Produktų sąrašas</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={{
                            pathname: '/orders/'
                        }}>Užsakymų sąrašas</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={{
                            pathname: '/New-Order'
                        }}>Naujas užsakymas</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={{
                            pathname: '/counter'
                        }}>Skaiciuokle</Link></li>
                    </ul>
                </nav>
                <Switch>
                    {this.state.auth ? <Route path="/New-Order" component={AsyncNewOrder}/> : null }
                    <Route path="/orders" component={OrderList}/>
                    <Route path="/counter" component={Counter}/>
                    {/*<Route render={() => <h1>Not found</h1>}/>*/}
                    <Redirect from="/" to="/orders"/>
                </Switch>
            </div>
        );
    };
}

export default Header;