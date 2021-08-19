import { act, fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { AUTHENTICATION_LOCAL_STORAGE_KEY } from "state/authentication/consts";
import { GlobalProvider } from "state/GlobalProvider";
import Login from "views/login";

const successfulLogin = async () => {
  fireEvent.change(screen.getByPlaceholderText(/username/i), {
    target: { value: "shaquille" },
  });

  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "oatmeal" },
  });
};

const mockSuccessResponse = { access_token: "token" };

beforeEach(() => {
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  const globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
});

describe("Login Page Rendering", () => {
  it("renders the Login page", () => {
    const { getAllByText } = render(<Login />);
    expect(getAllByText(/login/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the header", () => {
    const { getByRole } = render(<Login />);
    expect(getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  it("renders 2 input components", () => {
    const { getByPlaceholderText } = render(<Login />);
    expect(getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it("renders 2 buttons", () => {
    const { getByRole } = render(<Login />);
    expect(getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(getByRole("button", { name: /reset/i })).toBeInTheDocument();
  });
});

describe("Login Form Validation Behavior", () => {
  it("validate user inputs, and provides error messages", async () => {
    const { getByTestId, getByText } = render(<Login />);

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(/username/i), {
        target: { value: "" },
      });

      fireEvent.change(screen.getByPlaceholderText(/password/i), {
        target: { value: "" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(getByText("Username is required")).toBeInTheDocument();
    expect(getByText("Password is required")).toBeInTheDocument();
  });

  it("should submit when form inputs contain text", async () => {
    const { getByTestId, queryByText } = render(<Login />);

    await act(successfulLogin);

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(queryByText("Username is required")).not.toBeInTheDocument();
    expect(queryByText("Password is required")).not.toBeInTheDocument();
  });
});

describe("user logs in successfully and token added to localstorage", () => {
  it("allows the user to login successfully", async () => {
    // // Render the Login component
    const { getByTestId } = render(
      <GlobalProvider>
        <Login />
      </GlobalProvider>
    );

    // // fill out the form
    await act(successfulLogin);

    //Submit the form
    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    // Expect local token to be set
    const storage = window.localStorage.getItem(
      AUTHENTICATION_LOCAL_STORAGE_KEY
    );

    expect(storage).not.toBe("null");

    expect(JSON.parse(storage || "{}").accessToken).toEqual(
      mockSuccessResponse.access_token
    );
  });
});

// describe("<App/>", () => {
//   before(() => {
//     cy.visit("http://localhost:3000");
//   });
//   it("Renders without crashing", () => {
//     cy.get("h1").contains("Login");
//   });

//   it("Renders a button component", () => {
//     cy.get("button").should("have.length", 1);
//   });

//   it("Renders 2 input fields", () => {
//     cy.get("input").should("have.length", 2);
//   });
// });

// The following uses testing-library/cypress.
// Its give us access to the same utility methods that we use with our unit and integration tests

// describe("Logging in", () => {
//   it("When submit button is pressed, user should not have success", () => {
//     cy.findByText(/Submit/i).click();
//     cy.findByText(/Congrats!/i).should("not.exist");
//   });

//   it("When submit button is pressed, Add text to inputs and Sign-in success", () => {
//     cy.findByLabelText(/username/i).type("shaquille");
//     cy.findByLabelText(/password/i).type("oatmeal");
//     cy.findByText(/Submit/i).click();
//     cy.findByText(/Congrats!/i);

//     cy.request(`http://www.mocky.io/v2/5ec297212f000065cac35450`)
//       .its("body")
//       .should("deep.eq", { hello: "world" });
//   });
// });
