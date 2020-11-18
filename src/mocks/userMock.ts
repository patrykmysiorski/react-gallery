import { IUser } from "../models/user";

const userMock: IUser = {
  username: "HomerSimpson",
  email: "homersimpson@email.com",
  verified: true,
  additionalData: {
    firstName: "Homer",
    lastName: "Simpson",
    dateOfBirth: new Date(),
    sex: "helikopter szturmowy apache",
  },
};

export default userMock;
