import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Auth } from "./components";

function LoginRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Auth} />
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
  );
}

export { LoginRoutes };
