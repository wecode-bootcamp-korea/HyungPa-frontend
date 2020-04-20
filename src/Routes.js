import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from './Pages/Login/Login';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
