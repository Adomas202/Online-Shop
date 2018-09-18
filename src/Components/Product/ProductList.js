import React, { Component } from 'react';
import Product from './Product';

const searchingFor = (term) => {
    return (x) => {
        return x.brand.toLowerCase().includes(term.toLowerCase()) || !term;
    }
};

class productList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            term: '',
            currentPage: 1,
            productsPerPage: 6,
        };

        this.handleClick = this.handleClick.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    searchHandler(event) {
        this.setState({term: event.target.value})
    }

    render() {

        const {products, currentPage, productsPerPage } = this.state;

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item"><a
                    className="page-link"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </a></li>
            );
        });

        return (
            <div>
                <form>
                    <h6>Paieška pagal telefono pavadinimą</h6><input className="form-control mr-sm-2 searchBar" type="text"
                                                                           onChange={this.searchHandler}/>
                </form>
                {this.state.term !== '' ?
                    products.filter(searchingFor(this.state.term)).map((product, index) => {
                        return <Product brand={product.brand}
                                        price={product.price}
                                        color={product.color}
                                        deliveryTime={product.deliveryTime}
                                        key={product.id}/>;
                    })
                    : null}
                {this.state.term === '' ?
                    <div><ul>
                        {currentProducts.map((product, index) => {
                            return <Product brand={product.brand}
                                            price={product.price}
                                            color={product.color}
                                            deliveryTime={product.deliveryTime}
                                            key={product.id}/>;
                        })}
                    </ul>
                        <ul className="pagination" id="page-numbers">
                            {renderPageNumbers}
                        </ul></div>
                    : null}
            </div>
        );
    }
}

const products = [
    {
        "id": 0,
        "brand": "OnePlus 3",
        "price": "407.76€",
        "color": "Geltona",
        "deliveryTime": "2018-11-02"
    },
    {
        "id": 1,
        "brand": "Huawei P20 PRO",
        "price": "751.32€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-07"
    },
    {
        "id": 2,
        "brand": "Lg G5",
        "price": "522.01€",
        "color": "Ruda",
        "deliveryTime": "2018-10-02"
    },
    {
        "id": 3,
        "brand": "Apple Iphone 7",
        "price": "111.18€",
        "color": "Ruda",
        "deliveryTime": "2018-10-30"
    },
    {
        "id": 4,
        "brand": "Lg G5",
        "price": "758.97€",
        "color": "Mėlyna",
        "deliveryTime": "2018-12-09"
    },
    {
        "id": 5,
        "brand": "Apple Iphone Xs",
        "price": "486.14€",
        "color": "Ruda",
        "deliveryTime": "2018-10-14"
    },
    {
        "id": 6,
        "brand": "OnePlus 6",
        "price": "499.82€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-22"
    },
    {
        "id": 7,
        "brand": "Apple Iphone 7",
        "price": "481.96€",
        "color": "Geltona",
        "deliveryTime": "2018-12-18"
    },
    {
        "id": 8,
        "brand": "Huawei P20 PRO",
        "price": "416.77€",
        "color": "Balta",
        "deliveryTime": "2018-09-25"
    },
    {
        "id": 9,
        "brand": "Apple Iphone Xs",
        "price": "633.15€",
        "color": "Balta",
        "deliveryTime": "2018-12-18"
    },
    {
        "id": 10,
        "brand": "OnePlus 3",
        "price": "893.80€",
        "color": "Ruda",
        "deliveryTime": "2018-12-12"
    },
    {
        "id": 11,
        "brand": "OnePlus 6",
        "price": "769.39€",
        "color": "Geltona",
        "deliveryTime": "2018-10-11"
    },
    {
        "id": 12,
        "brand": "OnePlus 3",
        "price": "247.43€",
        "color": "Geltona",
        "deliveryTime": "2018-12-31"
    },
    {
        "id": 13,
        "brand": "Apple Iphone 7",
        "price": "604.74€",
        "color": "Balta",
        "deliveryTime": "2018-10-13"
    },
    {
        "id": 14,
        "brand": "OnePlus 6",
        "price": "801.82€",
        "color": "Balta",
        "deliveryTime": "2018-11-22"
    },
    {
        "id": 15,
        "brand": "Huawei P20",
        "price": "620.96€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-26"
    },
    {
        "id": 16,
        "brand": "OnePlus 3",
        "price": "117.85€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-10"
    },
    {
        "id": 17,
        "brand": "Huawei P20",
        "price": "243.78€",
        "color": "Balta",
        "deliveryTime": "2018-10-20"
    },
    {
        "id": 18,
        "brand": "Lg G5",
        "price": "320.62€",
        "color": "Mėlyna",
        "deliveryTime": "2018-09-24"
    },
    {
        "id": 19,
        "brand": "Apple Iphone 7",
        "price": "467.41€",
        "color": "Ruda",
        "deliveryTime": "2018-12-26"
    },
    {
        "id": 20,
        "brand": "Lg G5",
        "price": "146.29€",
        "color": "Balta",
        "deliveryTime": "2018-12-01"
    },
    {
        "id": 21,
        "brand": "Apple Iphone 7",
        "price": "800.44€",
        "color": "Ruda",
        "deliveryTime": "2018-12-06"
    },
    {
        "id": 22,
        "brand": "Samsung Galaxy S8",
        "price": "852.26€",
        "color": "Geltona",
        "deliveryTime": "2018-11-11"
    },
    {
        "id": 23,
        "brand": "Samsung Galaxy S8",
        "price": "425.52€",
        "color": "Ruda",
        "deliveryTime": "2018-11-04"
    },
    {
        "id": 24,
        "brand": "Samsung Galaxy S9",
        "price": "744.62€",
        "color": "Balta",
        "deliveryTime": "2018-10-31"
    },
    {
        "id": 25,
        "brand": "Lg G5",
        "price": "515.96€",
        "color": "Mėlyna",
        "deliveryTime": "2018-09-20"
    },
    {
        "id": 26,
        "brand": "Apple Iphone 8 PLUS",
        "price": "643.06€",
        "color": "Mėlyna",
        "deliveryTime": "2018-12-27"
    },
    {
        "id": 27,
        "brand": "Huawei P20",
        "price": "309.48€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-07"
    },
    {
        "id": 28,
        "brand": "Samsung Galaxy S9",
        "price": "430.63€",
        "color": "Ruda",
        "deliveryTime": "2018-10-05"
    },
    {
        "id": 29,
        "brand": "Lg G5",
        "price": "485.54€",
        "color": "Geltona",
        "deliveryTime": "2018-12-01"
    },
    {
        "id": 30,
        "brand": "Huawei P20 PRO",
        "price": "235.48€",
        "color": "Mėlyna",
        "deliveryTime": "2018-12-28"
    },
    {
        "id": 31,
        "brand": "Apple Iphone 8 PLUS",
        "price": "756.63€",
        "color": "Mėlyna",
        "deliveryTime": "2018-11-03"
    },
    {
        "id": 32,
        "brand": "Samsung Galaxy S9",
        "price": "410.13€",
        "color": "Geltona",
        "deliveryTime": "2018-10-07"
    },
    {
        "id": 33,
        "brand": "Apple Iphone Xs",
        "price": "816.80€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-25"
    },
    {
        "id": 34,
        "brand": "Huawei P20",
        "price": "337.20€",
        "color": "Ruda",
        "deliveryTime": "2018-10-10"
    },
    {
        "id": 35,
        "brand": "Samsung Galaxy S9",
        "price": "563.94€",
        "color": "Ruda",
        "deliveryTime": "2018-10-09"
    },
    {
        "id": 36,
        "brand": "Apple Iphone Xs",
        "price": "679.09€",
        "color": "Mėlyna",
        "deliveryTime": "2018-12-20"
    },
    {
        "id": 37,
        "brand": "Apple Iphone Xs",
        "price": "144.65€",
        "color": "Ruda",
        "deliveryTime": "2018-09-28"
    },
    {
        "id": 38,
        "brand": "OnePlus 3",
        "price": "102.11€",
        "color": "Mėlyna",
        "deliveryTime": "2018-09-26"
    },
    {
        "id": 39,
        "brand": "Samsung Galaxy S9",
        "price": "388.60€",
        "color": "Ruda",
        "deliveryTime": "2018-11-16"
    },
    {
        "id": 40,
        "brand": "Samsung Galaxy S9",
        "price": "222.17€",
        "color": "Ruda",
        "deliveryTime": "2018-11-25"
    },
    {
        "id": 41,
        "brand": "Lg G5",
        "price": "480.94€",
        "color": "Ruda",
        "deliveryTime": "2018-10-29"
    },
    {
        "id": 42,
        "brand": "Samsung Galaxy S8",
        "price": "827.11€",
        "color": "Ruda",
        "deliveryTime": "2018-09-24"
    },
    {
        "id": 43,
        "brand": "Apple Iphone Xs",
        "price": "672.87€",
        "color": "Balta",
        "deliveryTime": "2018-11-06"
    },
    {
        "id": 44,
        "brand": "Huawei P20 PRO",
        "price": "759.61€",
        "color": "Balta",
        "deliveryTime": "2018-12-18"
    },
    {
        "id": 45,
        "brand": "Huawei P20 PRO",
        "price": "480.65€",
        "color": "Balta",
        "deliveryTime": "2018-12-03"
    },
    {
        "id": 46,
        "brand": "Huawei P20",
        "price": "601.76€",
        "color": "Geltona",
        "deliveryTime": "2018-11-18"
    },
    {
        "id": 47,
        "brand": "Lg G5",
        "price": "223.84€",
        "color": "Geltona",
        "deliveryTime": "2018-11-01"
    },
    {
        "id": 48,
        "brand": "Apple Iphone 7",
        "price": "755.03€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-25"
    },
    {
        "id": 49,
        "brand": "Apple Iphone 8 PLUS",
        "price": "667.30€",
        "color": "Mėlyna",
        "deliveryTime": "2018-10-04"
    }
];

export default productList;