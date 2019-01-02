import React, { Component } from 'react';
import { DB_CONFIG } from '../../Config/config';
import firebase from 'firebase';

class NewOrder extends Component {
    constructor() {
        super();
        this.state = {
            order: "",
            app: firebase.initializeApp(DB_CONFIG)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let dbCon = this.state.app.database().ref('/orders');
        dbCon.push({
            order: this.state.order
        })
    }

    handleKeyPress = (order) => {
        this.setState({
            order: order.target.value
        })
    }

    render() {
        return(
            <div>
                <form>
                    <input type="tetxt" placeholder="Irasyk uzsakymo numeri" onKeyDown={this.handleKeyPress}></input>
                    <br/>
                    <textarea placeholder="Irasyk uzsakymo aprasyma"></textarea>
                    <br/>
                    <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Create</button>
                </form>
            </div>
        )
    }
}

export default NewOrder;