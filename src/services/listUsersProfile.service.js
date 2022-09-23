import users from "../database";
import jwt from "jsonwebtoken";

const getProfileService = (user) => {
  const token = user.headers.authorization.split(" ")[1];

  const decodedEmail = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.email;
  });

  const userProfile = users.find((element) => element.email === decodedEmail);

  return {
    email: userProfile.email,
    name: userProfile.name,
    isAdm: userProfile.isAdm,
    createdOn: userProfile.createdOn,
    updatedOn: userProfile.updatedOn,
    uuid: userProfile.uuid,
  };
};

export default getProfileService;