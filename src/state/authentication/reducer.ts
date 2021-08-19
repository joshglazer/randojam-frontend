import { IUser } from "types";
import { authenticationInitialState } from "./initialState";
import { IAuthenticationContextData } from "./types";

export type Actions =
  | { type: "login_request" }
  | { type: "login_success"; accessToken: string }
  | { type: "login_error" }
  | { type: "logout" }
  | { type: "clear_error" };

export const AuthenticationReducer = (
  state: IAuthenticationContextData,
  action: Actions
): IAuthenticationContextData => {
  switch (action.type) {
    case "login_request":
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };

    case "login_success":
      // TODO: grab real user info
      const user: IUser = {
        id: "id-placeholder",
        imageUrl: "https://www.fillmurray.com/300/300",
        firstName: "firstname-placeholder",
        lastName: "lastname-placeholder",
        username: "username-placeholder",
      };

      return {
        ...state,
        isLoading: false,
        accessToken: action.accessToken,
        user,
      };

    case "login_error":
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };

    case "logout":
      return {
        ...authenticationInitialState,
      };

    case "clear_error":
      return {
        ...state,
        hasError: false,
      };

    default:
      return state;
  }
};
