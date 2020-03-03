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
  AdminRoutes
} from "./features"

function MainRoutes(props) {
  return (
    <Switch>
      <Route exact path="/register">
        <h1>Aca ira el register</h1>
      </Route>
      <Route exact path="/login">
        <h1>Login</h1>
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