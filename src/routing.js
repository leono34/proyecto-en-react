import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  ClientRoutes,
  EmployeesRoutes,
  AdminRoutes,
  LoginRoutes,
  RegisterRoutes,
} from "./features"

function MainRoutes(props) {
  return (
    <Switch>
      <Route exact path="/register" component={RegisterRoutes}>
      </Route>
      <Route exact path="/login" component={LoginRoutes}>
      </Route>
      <Route path="/client" component={ClientRoutes}/>
      
      <Route path="/admin" component={AdminRoutes}/>

      <Route path="/employee" component={EmployeesRoutes}/>
      {/* <Redirect
        to={{
          pathname: "/login"
        }}
      /> */}
    </Switch>
  )
}

export { MainRoutes };