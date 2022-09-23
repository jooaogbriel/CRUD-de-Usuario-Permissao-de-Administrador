import { Router } from 'express';

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updatedUserController from "../controllers/updateUser.controller";
import verifyEmailAvailabilityMiddleware from '../middlewares/verifyEmailAvailability.middlewares';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middlewares'
import verifyUserAdmMiddleware from '../middlewares/verifyUserAdm.middlewares';
import verifyUserMiddleware from '../middlewares/verifyUser.middleware';
import listUsersProfileController from '../controllers/listUsersProfile.controller';

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("",verifyAuthTokenMiddleware,verifyUserAdmMiddleware, listUsersController);
router.patch("/:uuid", verifyAuthTokenMiddleware,verifyUserMiddleware,updatedUserController)
router.get("/profile", verifyAuthTokenMiddleware, listUsersProfileController)
router.delete("/:id",verifyAuthTokenMiddleware,verifyUserAdmMiddleware, deleteUserController)


export default router;
