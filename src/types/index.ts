export interface IUser {
  id: string;
  imageUrl?: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface IJam {
  name: string;
  description: string;
  creatorUserID: string;
  collabUserIDs: string[];
  tags: string[];
}
