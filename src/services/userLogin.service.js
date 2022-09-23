import users from '../database';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

const userLoginService = (email, password) => {

    const user = users.find((element) => element.email === email)

    if(!user){
        return { message: "Wrong email/password" };
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if(!passwordMatch) {
        return { message: "Wrong email/password" };
    }

     const token = jwt.sign({email:user.email, isAdm: user.isAdm}, "SECRET_KEY", {expiresIn: "24h", subject: user.uuid})
    return  {token};

}
export default userLoginService;