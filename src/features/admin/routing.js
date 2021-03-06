import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  Admin, Boton, MediaCard, Cards,Formulario, Usuario, Crud,Avatar
} from "./components";

function AdminRoutes(props) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={Avatar}/>
      {/* <Route path={`${path}/edit`}>
        <UserEdit />
      </Route>
      <Route path={`${path}/create`}>
        <UserCreate />
      </Route>
      <Route path={`${path}/:id`} component={Avatar}/> */}
    </Switch>
  )
}

export {
  AdminRoutes
}