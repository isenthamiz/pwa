import React from 'react';
import axios from 'axios';
import {Connect, connect} from 'react-redux';

import configs from './../../configs/configs';
import {userLogin} from './../../actions/loginActions';
import './../../styles/Login.css';

class Login extends React.Component {
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

    async onFormSubmit(event) {
        let responseData = undefined;
        event.preventDefault();
        let username = event.target.elements.loginusername.value;
        let password = event.target.elements.loginpassword.value;
        if(username && password) {
            let response = await axios.post(`${configs.loginApi.host}:${configs.loginApi.port}${configs.loginApi.endpoint.login}`, {"username": username, "password": password})
            console.log(response)
            responseData = response.data;
            if(responseData) {
                this.setState((prevState)=>{
                    return {
                        username,
                        password,
                        isLoggedIn: true
                    }
                })
                let data = {};
                data.id = 1;
                data.name = 'Senthamiz';
                data.username = username;
                data.token = responseData.token;
                data.isLoggedIn = true;
                this.props.dispatch(userLogin(data));
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
            <div className="app-title">
                <h1>hurly-burly</h1>
            </div>
            <div className="login-container">
                <form className="login-form" onSubmit={this.onFormSubmit}>
                    <input id="loginusername" type="text" placeholder="Username"></input>
                    <input id="loginpassword" type="password" placeholder="Password"></input>
                    <button id="login-button">Login</button>
                </form>
            </div>
            <div className="signup-container">
                <div>
                    <span>Dont you have account ?</span>
                    <button id="signup-button">Sign Up</button>
                </div>
            </div>
            </div>
        )
    }
}

export default connect()(Login)