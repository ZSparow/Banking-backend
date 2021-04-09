



export default class Helpers {


    /**
     * 
     * @returns 
     */
    static register = () => ({
        firstName: {
            presence: true,
            type: "string",
        },
        lastName: {
            presence: true,
            type: "string",
        },
        email: {
            presence: true,
            type: "string",
        },
        DOB: {
            presence: true,
            type: "string",
        },
        password: {
            presence: true,
            type: "string",
            length: { maximum: 15, minimum: 4 },
        },
        phoneNumber: {
            presence: true,
            type: "string",
            length: { maximum: 15, minimum: 10 },
        },
    })


    /**
     * 
     * @returns 
     */
    static login = () => ({

        email: {
            presence: true,
            type: "string",

        },

        password: {
            presence: true,
            type: "string",
            length: { maximum: 15, minimum: 4 },
        },

    })



}