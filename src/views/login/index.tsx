import { Formik } from "formik";
import {
  Form,
  Input,
  ResetButton,
  SubmitButton,
} from "formik-semantic-ui-react";
import React, { useContext, useEffect } from "react";
import { Header, Message } from "semantic-ui-react";
import { loginUser } from "state/authentication/actions";
import { GlobalContext } from "state/GlobalProvider";
import * as Yup from "yup";

function Login() {
  const { authenticationState, authenticationDispatch } =
    useContext(GlobalContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const LoginValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  useEffect(() => {
    clearErrors();
  }, []);

  const clearErrors = () => {
    authenticationDispatch({ type: "clear_error" });
  };

  return (
    <>
      <Header as="h2">Login</Header>
      <div>Login below to collab with some randos!</div>
      {authenticationState.hasError && (
        <Message negative>
          <p>Incorrect username or password</p>
        </Message>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          loginUser(authenticationDispatch, {
            username: values.username,
            password: values.password,
          });
          // }).then(() => setSubmitting(false));
        }}
      >
        <Form size="large" style={{ marginTop: "1em" }} data-testid="form">
          <Input
            icon="user"
            iconPosition="left"
            name="username"
            placeholder="Username"
            errorPrompt
          />
          <Input
            icon="lock"
            iconPosition="left"
            name="password"
            type="password"
            placeholder="Password"
            errorPrompt
          />
          <SubmitButton fluid primary>
            Login
          </SubmitButton>
          <ResetButton fluid secondary onClick={clearErrors}>
            Reset
          </ResetButton>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
