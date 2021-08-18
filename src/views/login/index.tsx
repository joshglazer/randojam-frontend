import { Formik } from "formik";
import {
  Form,
  Input,
  ResetButton,
  SubmitButton,
} from "formik-semantic-ui-react";
import React, { useContext } from "react";
import { Header } from "semantic-ui-react";
import { loginUser } from "state/authentication/actions";
import { GlobalContext } from "state/GlobalProvider";
import * as Yup from "yup";

function Login() {
  const { authenticationDispatch } = useContext(GlobalContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const LoginValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <Header as="h2">Login</Header>
      <div>Login below to collab with some randos!</div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            loginUser(authenticationDispatch, {
              username: values.username,
              password: values.password,
            }).then(() => setSubmitting(false));
          }, 400);
        }}
      >
        <Form size="large" style={{ marginTop: "1em" }}>
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
          <ResetButton fluid secondary>
            Reset
          </ResetButton>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
