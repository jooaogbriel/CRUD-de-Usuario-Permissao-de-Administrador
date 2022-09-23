import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {

    const {email, password} = req.body

    const userLogin = userLoginService(email, password, res)


    if(userLogin.message === "Wrong email/password"){
        return res.status(401).json({message: userLogin.message})
    }

    return res.json(userLogin)

}
export default userLoginController;