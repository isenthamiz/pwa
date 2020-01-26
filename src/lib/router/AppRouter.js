import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import RequireAuth from '../hoc/RequireAuth';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path='/login' component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}