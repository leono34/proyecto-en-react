import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  UserList,
  UserCreate,
  UserEdit,
  UserDetail
} from "./components";

function UsersRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <UserList />
      </Route>
      <Route path={`${path}/edit`}>
        <UserEdit />
      </Route>
      <Route path={`${path}/create`}>
        <UserCreate />
      </Route>
      <Route path={`${path}/detail/:id`}>
        <UserDetail />
      </Route>
    </Switch>
  )
}

export {
  UsersRoutes
}