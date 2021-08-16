export interface IUser {
  id: string;
  imageUrl?: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface IJam {
  userID: string;
  name: string;
  tags: string[];
}
