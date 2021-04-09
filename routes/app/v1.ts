import * as express from 'express'
const router = express.Router();

import UserController from "../../controllers/userController"

/** USER CONTROLLER */
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/resetPassword', UserController.resetPassword)



/** HOME CONTROLLER */




export default router;