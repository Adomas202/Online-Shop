import React from 'react';

const Product = (props) => {
    return(
        <div className="card">
            <li>{props.name}</li>
        </div>
    );
}

export default Product;