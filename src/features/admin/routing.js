import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Admin
} from "./components";

function AdminRoutes(props) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Admin}/>
      {/* <Route path={`${path}/edit`}>
        <UserEdit />
      </Route>
      <Route path={`${path}/create`}>
        <UserCreate />
      </Route>
      <Route path={`${path}/:id`} component={EmployeesDetail}/> */}
    </Switch>
  )
}

export {
  AdminRoutes
}