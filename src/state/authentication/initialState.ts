import { IAuthenticationContextData } from "./types";

export const authenticationInitialState: IAuthenticationContextData = {
  isLoading: false,
  accessToken: null,
  user: null,
};
