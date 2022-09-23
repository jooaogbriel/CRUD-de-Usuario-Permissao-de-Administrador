import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { email, name, password, isAdm } = request.body;

  const user = await createUserService(email, name, password, isAdm);

  return response.status(201).json(user);
};

export default createUserController;