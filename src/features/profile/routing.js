import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Profile } from "./components";

function ProfileRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Profile} />
    </Switch>
  );
}

export { ProfileRoutes };
