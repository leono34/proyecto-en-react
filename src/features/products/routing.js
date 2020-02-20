import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import {
  ProductList,
  ProductCreate,
  ProductEdit,
  ProductDetail
} from "./components";

function ProductRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <ProductList />
      </Route>
      <Route path={`${path}/edit`}>
        <ProductEdit />
      </Route>
      <Route path={`${path}/create`}>
        <ProductCreate />
      </Route>
      <Route path={`${path}/detail/:id`}>
        <ProductDetail />
      </Route>
    </Switch>
  )
}

export {
  ProductRoutes
}