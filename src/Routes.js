import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./Components/Footer/Footer";
import ReviewDetail from "./Pages/ReviewDetail/ReviewDetail";

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
                </Switch>
                    <Route path='/' component={Footer} />
            </Router>
        );
    }
}

export default Routes;
