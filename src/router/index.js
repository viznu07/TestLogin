import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { Routes } from "./routes";
import PrivateRouter from "./privateRouter";

import {
  NotFound,
  Home,
  Login,
  Login2,
  Login3
} from './../screens';

const RouterApp = (props) => {

  return (
    <Router>
      <Switch>

        {/* Login Route */}
        <Route exact path={Routes.login}>
          <Login />
        </Route>

        {/* Login2 Route */}
        <Route exact path={Routes.login2}>
          <Login2 />
        </Route>

        {/* Login3 Route */}
        <Route exact path={Routes.login3}>
          <Login3 />
        </Route>

        {/* Home Route */}
        <Route exact path={Routes.home}>
          <Home />
        </Route>

        {/* For unknow/non-defined path */}
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
