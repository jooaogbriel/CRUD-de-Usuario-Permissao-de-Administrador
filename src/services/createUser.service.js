import users from "../database";
import {v4 as uuidv4} from 'uuid';
import * as bcrypt from "bcryptjs";

const createUserService = async(email, name, password, isAdm) => {

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = { 
        email, 
        name,
        password: hashedPassword,
        isAdm,
        createdOn: Date(),
        updatedOn: Date(),
        uuid: uuidv4() 
    } 

    users.push(newUser);

    return  { 
        email, 
        name,
        isAdm,
        createdOn: Date(),
        updatedOn: Date(),
        uuid: uuidv4() 
    } ;

} 
export default createUserService;