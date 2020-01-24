import React from 'react';
import './../../styles/Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: undefined,
            password: undefined,
            isLoggedIn: false,
            error:undefined
        }
        this.onFormSubmit  = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        let username = event.target.elements.loginusername.value;
        let password = event.target.elements.loginpassword.value;
        if(username && password) {
            if(username == 'admin' && password == 'admin') {
                this.setState((prevState)=>{
                    return {
                        username,
                        password,
                        isLoggedIn: true
                    }
                })
                this.props.history.push('/')
            } else {
                this.setState((prevState)=>{
                    return {
                        isLoggedIn: false
                    }
                })
            }
        } else {
            this.setState((prevState)=>{
                return {
                    error: 'login error'
                }
            })
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
            <div className="login-container">
                <form className="login-form" onSubmit={this.onFormSubmit}>
                    <input id="loginusername" type="text" placeholder="Username"></input>
                    <input id="loginpassword" type="password" placeholder="Password"></input>
                    <button id="login-button">Login</button>
                </form>
            </div>
            <div className="signup-container">
                <div>
                    <h3>Dont you have account ?</h3>
                    <button id="signup-button">Sign Up</button>
                </div>
            </div>
            </div>
        )
    }
}