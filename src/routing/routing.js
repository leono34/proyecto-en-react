import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  ClientRoutes,
  EmployeesRoutes,
  AdminRoutes,
  LoginRoutes,
  ProfileRoutes
} from "../features";

import {
  PrivateRoute
} from "./private-routing";

function MainRoutes(props) {
  console.log("mainroutes", props)
  return (
    <Switch>
      <Route exact path="/login" component={LoginRoutes}>
      </Route>
      <PrivateRoute path="/cliente">
        <ClientRoutes />
      </PrivateRoute>
      {/* <PrivateRoute path="/admin">
        <AdminRoutes />
      </PrivateRoute> */}
      <PrivateRoute path="/cuidadores">
        <EmployeesRoutes />
      </PrivateRoute>
      <PrivateRoute path="/perfil">
        <ProfileRoutes />
      </PrivateRoute>
      <Redirect
        to={{
          pathname: "/"
        }}
      />
      <Route path="*">
        <h1>No existe esa ruta</h1>
      </Route>
    </Switch>
  )
}

export { MainRoutes };