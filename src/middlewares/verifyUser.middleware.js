import users from "../database";

const verifyUserMiddleware = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];

  const user = users.find((use) => use.email === req.user);
  const { uuid } = req.params || { uuid: " " };
  if (uuid === user.uuid || user.isAdm) {
    console.log(uuid, user.uuid)
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
};

export default verifyUserMiddleware;