export interface IUser {
  username: string;
  email: string;
  verified?: boolean;
  additionalData: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    sex: string;
  };
  friends?: string[];
}
