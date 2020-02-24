import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Client
} from "./components";

function ClientRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Client}/>
      {/* <Route path={`${path}/edit`}>
        <ProductEdit />
      </Route>
      <Route path={`${path}/create`}>
        <ProductCreate />
      </Route>
      <Route path={`${path}/detail/:id`}>
        <ProductDetail />
      </Route> */}
    </Switch>
  )
}

export {
  ClientRoutes
}