import React, { Component } from 'react';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeHolder: 'Mail address'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeHolder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Auth;