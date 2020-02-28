import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Employees,
  EmployeesDetail,
  EmployeeGrid
} from "./components";

function EmployeesRoutes(props) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={EmployeeGrid}/>
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