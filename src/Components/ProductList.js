import React, { Component } from 'react';

const data =[
    {
        "name":"Tepalu keitimas",
        "type":"Greitas"
    },
    {
        "name":"Pavaru taisymas",
        "type":"Letas"
    },
    {
        "name":"Apziura",
        "type":"Labai greitas"
    },
    {
        "name":"Lempos keitimas",
        "type":"Greitas"
    },
]

const searchingFor = (term) => {
    return (x) => {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class productList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            term: '',
        }

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({term: event.target.value})
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text"
                            onChange={this.searchHandler}/>
                </form>
                {data.filter(searchingFor(this.state.term)).map((product, index) => {
                    return (<li key={index}>{product.name} {product.type}</li>);
                })}
            </div>
        )
    }
}

export default productList;