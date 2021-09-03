import React from "react";
import { Redirect, Route } from "react-router-dom";
import { REDIRECT_ROUTES } from "../../../routes/constants";

const AuthenticadePrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("token") ||
          sessionStorage.getItem("token") ? (
          <Redirect to={REDIRECT_ROUTES.Error} />
        ) : (
          children
        );
      }}
    />
  );
};

export default AuthenticadePrivateRoute;
