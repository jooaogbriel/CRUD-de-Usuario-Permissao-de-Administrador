import updatedUserService from '../services/updateUser.service'
  
const updatedUserController = (req,res) => {

    const {uuid} = req.params;
    const {name, email} = req.body;
    
    const {password, ...updatedUser} = updatedUserService(uuid, name, email)

    return res.status(200).json(updatedUser)

}
export default updatedUserController;