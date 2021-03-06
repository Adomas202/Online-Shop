import React from 'react';
import './Product.css';

const Product = (props) => {
    return(
        <div className="card text-center">
            <div className="card-header">
                Galima būtų gauti: {props.deliveryTime}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.brand} - {props.price}</h5>
                <p className="card-text"></p>
            </div>
            <div className="card-footer text-muted">
                Spalva: {props.color}
            </div>
        </div>
    );
};

export default Product;