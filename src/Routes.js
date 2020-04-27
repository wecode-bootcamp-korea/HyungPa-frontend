import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import ReviewDetail from "./Pages/ReviewDetail/ReviewDetail";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Footer from "./Components/Footer/Footer";
import ReviewList from './Pages/ReviewList/ReviewList';
import "./Reset.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path="/Review/Detail" component={ReviewDetail} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          <Route exact path="/ReviewList" component={ReviewList} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
