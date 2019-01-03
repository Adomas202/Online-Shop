import React, { Component } from 'react';
import { DB_CONFIG } from '../../Config/config';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class NewOrder extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            // app: firebase.initializeApp(DB_CONFIG)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // let dbCon = this.state.app.database().ref('/orders');
        // dbCon.push({
        //     order: this.state.order
        // })
        this.props.createProject(this.state)
    }

    handleKeyPress = (title) => {
        this.setState({
            title: title.target.value
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

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(NewOrder);