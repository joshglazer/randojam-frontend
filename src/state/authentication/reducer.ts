import { IUser } from "types";
import { IAuthenticationContextData } from "./types";

export type Actions =
  | { type: "login"; username: string; password: string }
  | { type: "logout" };

export const AuthenticationReducer = (
  state: IAuthenticationContextData,
  action: Actions
): IAuthenticationContextData => {
  switch (action.type) {
    // Accept an array of File objects and transform them into the structure used by the Queue components
    case "login":
      // TODO: api call to get token and user info
      const token = "token-placeholder";
      const user: IUser = {
        id: "id-placeholder",
        imageUrl: "https://www.fillmurray.com/300/300",
        firstName: "firstname-placeholder",
        lastName: "lastname-placeholder",
        username: action.username,
      };
      return {
        ...state,
        token,
        user,
      };

    case "logout":
      return {
        ...state,
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
