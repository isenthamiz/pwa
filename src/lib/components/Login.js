import React from 'react';
import './../../styles/Login.css';

export default class Login extends React.Component {
    render() {
        return (
            <div>
            <div class="login-container">
                <form class="login-form">
                    <input id="login-username" type="text" placeholder="Username"></input>
                    <input id="login-password" type="password" placeholder="Password"></input>
                    <button id="login-button">Login</button>
                </form>
            </div>
            <div class="signup-container">
                <div>
                    <h3>Dont you have account ?</h3>
                    <button id="signup-button">Sign Up</button>
                </div>
            </div>
            </div>
        )
    }
}