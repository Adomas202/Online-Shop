import React, {Component} from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;