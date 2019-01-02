import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login page</h1>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;