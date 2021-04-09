import Validator from "../../helpers/validator"
import * as Validate from "validate.js"
import * as PhoneValidate from 'iqphone'

export default class UserController {



    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    static async register(req, res) {
        const data = req.body;

        // check for data validation
        let notvalid = Validate(data, Validator.register())
        if (notvalid)
            return res.send(notvalid)


        //check phone number validation
        let phoneObj = PhoneValidate.getAllFormats(data.phoneNumber)
        if (!phoneObj.isNumber)
            return res.send("Invalid phone number")



        //TODO: now we make a database search for the user
        res.send(phoneObj.globalP)



    }


    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    static async login(req, res) {

        const data = req.body;
        let notvalid = Validate(data, Validator.login())
        console.log(notvalid)

        if (notvalid)
            return res.send(notvalid)


        res.send(`youre logged in`)


    }

    static async resetPassword(req, res) {
        const data = req.body;


        if (!data.email)
            return res.send("Please fill your data")


        res.send(`your new password is kdsjfkdsjkfs`)


    }
}

