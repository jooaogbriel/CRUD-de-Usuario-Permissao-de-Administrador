import listUsersService from "../services/listUsers.service";

const listUsersController = (req,res) => {
    const users = listUsersService()

    return res.json(users)
}
export default listUsersController;