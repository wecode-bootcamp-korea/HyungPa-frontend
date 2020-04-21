import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./Components/Footer/Footer";
import ReviewDetail from "./Pages/ReviewDetail/ReviewDetail";
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
                    <Route exact path='/Review/Detail' component={ReviewDetail} />
                    <Route exact path='/login' component={Login} />
                </Switch>
                    <Route path='/' component={Footer} />
            </Router>
        );
    }
}

export default Routes;
