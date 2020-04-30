import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Nav/Nav";
import ReviewDetail from "./Pages/ReviewDetail/ReviewDetail";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Footer from "./Components/Footer/Footer";
import "./Reset.scss";
import Signunpa from "./Pages/Signunpa/Signunpa";
import Signin from "./Pages/Signin/Signin";

class Routes extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signunpa" component={Signunpa} />
          <Route
            exact
            path="*"
            component={() => (
              <>
                <Nav />
                <Route exact path="/Review/Detail" component={ReviewDetail} />
                <Route
                  exact
                  path="/ProductDetail/:productId"
                  component={ProductDetail}
                />
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
