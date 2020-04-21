import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login/Login';
import ReviewDetail from "./Pages/ReviewDetail/ReviewDetail";
import Footer from "./Components/Footer/Footer";
import "./Reset.scss";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/Review/Detail' component={ReviewDetail} />
                </Switch>
                    <Route path='/' component={Footer} />
            </Router>
        );
    }
}

export default Routes;
