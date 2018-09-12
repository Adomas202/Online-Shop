import React, { Component } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Header />
          <ProductList />
      </div>
    );
  }
}

export default App;
