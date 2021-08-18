import { IUser } from "types";
import { IAuthenticationContextData } from "./types";

export type Actions =
  | { type: "login_request" }
  | { type: "login_success"; accessToken: string }
  | { type: "login_error" }
  | { type: "logout" };

export const AuthenticationReducer = (
  state: IAuthenticationContextData,
  action: Actions
): IAuthenticationContextData => {
  switch (action.type) {
    case "login_request":
      return {
        ...state,
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
        isLoading: false,
      };

    case "logout":
      return {
        ...state,
        accessToken: null,
        user: null,
      };

    default:
      return state;
  }
};
