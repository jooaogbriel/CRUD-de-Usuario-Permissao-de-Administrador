import getProfileService from "../services/listUsersProfile.service";

const listUsersProfileController = (req, res) => {

  const token = req
  
  const user = getProfileService(token);

  return res.status(200).json(user);
};

export default listUsersProfileController;