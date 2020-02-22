import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  UsersRoutes,
  ProductRoutes
} from "./features"

function MainRoutes(props) {
  return (
    <Switch>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/products">
        <ProductRoutes />
      </Route>
      <Route path="/users">
        <UsersRoutes />
      </Route>
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
    </Switch>
  )
}

export { MainRoutes };