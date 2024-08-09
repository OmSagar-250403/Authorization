import { Router } from "express";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = Router();

/** import all controllers */
import * as postcontroller from '../controllers/postControllers.js'
import * as getcontroller from '../controllers/getControllers.js'
import * as putcontroller from '../controllers/putControllers.js'
//import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middlewares/auth.js';



/** POST Methods */
router.route('/register').post(postcontroller.register); // register user
router.route('/registerMail').post((req,res)=>{res.json({"success":"true"})}); // send the email
router.route('/authenticate').post((req,res)=>{res.json({"success":"true"})}); // authenticate user
router.route('/login').post(verifyUser , postcontroller.login); // login in app

/** GET Methods */
router.route('/user/:username').get(getcontroller.getUser) // user with username
/*router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables*/


/** PUT Methods */
router.route('/updateuser').put(Auth, putcontroller.updateUser); // is use to update the user profile
/*router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword)*/// use to reset password



export default router;