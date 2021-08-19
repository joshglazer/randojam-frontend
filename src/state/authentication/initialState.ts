import { IAuthenticationContextData } from "./types";

export const authenticationInitialState: IAuthenticationContextData = {
  isLoading: false,
  hasError: false,
  accessToken: null,
  user: null,
};
