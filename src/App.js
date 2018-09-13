import React, { Component } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import { Router, Route } from 'react-router';
import Product from "./Components/Product";
import OrderList from "./Components/OrderList";

class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <Route path={"products"} Component={Product}/>
              <Route path={"orders"} Component={OrderList}/>
          </Router>
          <Header />
          <div className="container">
            <ProductList />
          </div>
      </div>
    );
  }
}

export default App;