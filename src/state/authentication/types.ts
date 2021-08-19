import { IUser } from "types";

export interface IAuthenticationContextData {
  isLoading: boolean;
  hasError: boolean;
  accessToken: string | null;
  user: IUser | null;
}

export interface ILoginRequestPayload {
  username: string;
  password: string;
}
