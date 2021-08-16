import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { RouteProps } from "react-router-dom";
import { AuthenticationContext } from "../state/authentication/context";

interface IAuthRouteProps extends RouteProps {
  type: string;
}

const AuthRoute = (props: IAuthRouteProps) => {
  const { state } = useContext(AuthenticationContext);

  if (props.type === "guest" && state.user) return <Redirect to="/dashboard" />;
  else if (props.type === "private" && !state.user) return <Redirect to="/" />;

  return <Route {...(props as RouteProps)} />;
};

export default AuthRoute;
