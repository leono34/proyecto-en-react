import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

function PrivateRoute(props) {
  let isLogin = sessionStorage.getItem("usuario");
  console.log("privateRoutes", props)
  const {
    children,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        return (isLogin)
          ? (children)
          : (
            <Redirect to={{
              pathname: "/login"
            }} />
          )
      }}
    />
  )
}

export {
  PrivateRoute
}