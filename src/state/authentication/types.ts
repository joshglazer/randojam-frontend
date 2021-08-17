import { IUser } from "types";

export interface IAuthenticationContextData {
  token: string | null;
  user: IUser | null;
}
