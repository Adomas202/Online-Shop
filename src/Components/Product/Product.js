import React from 'react';
import './Product.css';

const Product = (props) => {
    return(
            <div className="card">
                <div className="card-header">
                    {props.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.type}</h5>
                </div>
            </div>
    );
};

export default Product;