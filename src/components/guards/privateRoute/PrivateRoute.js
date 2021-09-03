import React from "react";
import { Redirect, Route } from "react-router-dom";
import { REDIRECT_ROUTES } from "../../../routes/constants";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("token") ||
          sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to={REDIRECT_ROUTES.Login} />
        );
      }}
    />
  );
};

export default PrivateRoute;
