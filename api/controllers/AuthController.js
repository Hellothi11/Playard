/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    authenticate: async (request, response) => {

        // Sign up user
        if (request.body.action == 'signup') {
            // Validate signup form

            // Check if email is registered

            // Create new user
        }

        // Log in user
    },

    logout: (request, response) => {
        // Logout user
    }

};

