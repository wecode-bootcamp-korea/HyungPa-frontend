import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import ReviewDetail from "./Pages/ReviewDetail/ReviewDetail";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Rank from "./Pages/Rank/Rank";
import Footer from "./Components/Footer/Footer";
import ReviewList from './Pages/ReviewList/ReviewList';
import "./Reset.scss";
import Signunpa from "./Pages/Signunpa/Signunpa";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signunpa" component={Signunpa} />
          <Route
            exact
            path="*"
            component={() => (
              <>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route exact path="/Review" component={ReviewList} />
                <Route exact path="/Review/Detail" component={ReviewDetail} />
                <Route
                  exact
                  path="/ProductDetail/:productId"
                  component={ProductDetail}
                />
                <Route exact path="/Rank" component={Rank} />
              </>
            )}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
