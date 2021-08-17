import PageFooter from "components/page-footer";
import PageHeader from "components/page-header";
import React, { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import AuthRoute from "./AuthRoute";

const Home = lazy(() => import("views/home"));
const Login = lazy(() => import("views/login"));
const SignUp = lazy(() => import("views/signup"));
const Dashboard = lazy(() => import("views/dashboard"));
const Profile = lazy(() => import("views/profile"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <Container style={{ marginTop: "7em" }}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <AuthRoute type="guest" path="/" exact component={Home} />
            <AuthRoute type="guest" path="/login" exact component={Login} />
            <AuthRoute type="guest" path="/signup" exact component={SignUp} />
            <AuthRoute
              type="private"
              path="/dashboard"
              exact
              component={Dashboard}
            />
            <AuthRoute
              type="private"
              path="/profile"
              exact
              component={Profile}
            />
          </Switch>
        </Suspense>
      </Container>
      <PageFooter></PageFooter>
    </BrowserRouter>
  );
};

export default IndexRouter;
