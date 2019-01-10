import React, { Fragment } from "react";

import Header from "./components/Header";
import Main from "./components/main";
import About from "./pages/about";
import Contact from "./pages/contact";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Header />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/signup/" component={Signup} />
        <Route path="/signin/" component={Signin} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
