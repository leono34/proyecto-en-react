import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Employees,
  EmployeesDetail
} from "./components";

function EmployeesRoutes(props) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Employees}/>
      {/* <Route path={`${path}/edit`}>
        <UserEdit />
      </Route>
      <Route path={`${path}/create`}>
        <UserCreate />
      </Route> */}
      <Route path={`${path}/:id`} component={EmployeesDetail}/>
    </Switch>
  )
}

export {
  EmployeesRoutes
}