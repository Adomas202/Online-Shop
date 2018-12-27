import React, { Component } from 'react';

class NewOrder extends Component {
    render() {
        handleSubmit = () => {
            
        }

        return(
            <div>
                <form>
                    <input type="tetxt" placeholder="Irasyk uzsakymo numeri"></input>
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