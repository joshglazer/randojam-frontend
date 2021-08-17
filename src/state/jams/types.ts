import { IJam, IUser } from "types";

export interface IJamsContextData {
  myJams: IJam[] | null;
  collabJams: IJam[] | null;
  users: {
    [id: string]: IUser;
  };
}
