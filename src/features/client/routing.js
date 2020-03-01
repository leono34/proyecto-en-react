import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Client,
  Dueño
} from "./components";

function ClientRoutes(props) {
  console.log("props", props)
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Client}/>
      <Route path={`${path}`} component={Dueño}/>
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
  ClientRoutes,
  Dueño
}