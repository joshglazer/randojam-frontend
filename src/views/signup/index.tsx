import React from "react";
import { Button, Form, Header } from "semantic-ui-react";

function SignUp() {
  return (
    <>
      <Header as="h2">Sign Up</Header>
      <div>Sign up below to start collabing with some randos!</div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last NAme" />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
}

export default SignUp;
