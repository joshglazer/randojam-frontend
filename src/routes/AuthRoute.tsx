import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { RouteProps } from "react-router-dom";
import { GlobalContext } from "state/GlobalProvider";

interface IAuthRouteProps extends RouteProps {
  type: string;
}

const AuthRoute = (props: IAuthRouteProps) => {
  const { authenticationState } = useContext(GlobalContext);

  if (props.type === "guest" && authenticationState.user)
    return <Redirect to="/dashboard" />;
  else if (props.type === "private" && !authenticationState.user)
    return <Redirect to="/" />;

  return <Route {...(props as RouteProps)} />;
};

export default AuthRoute;
