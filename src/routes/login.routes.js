import { Router } from 'express';
import userLoginController from '../controllers/userLogin.controller';

const loginRouter = Router() 

loginRouter.post("", userLoginController)

export default loginRouter;