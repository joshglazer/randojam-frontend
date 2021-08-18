import { Actions } from "./reducer";
import { ILoginRequestPayload } from "./types";

export async function loginUser(
  dispatch: React.Dispatch<Actions>,
  loginPayload: ILoginRequestPayload
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "login_request" });
    let response = await fetch(`/api/login`, requestOptions);
    let token = await response.json();

    if (token.access_token) {
      dispatch({ type: "login_success", accessToken: token.access_token });
    }

    dispatch({ type: "login_error" });
    return;
  } catch (error) {
    dispatch({ type: "login_error" });
  }
}

export async function logout(dispatch: React.Dispatch<Actions>) {
  dispatch({ type: "logout" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
