/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  render: async (req, res) => {
    try {
        let data = await User.findOne({
            email: 'johnnie86@gmail.com'
        });
        if (!data) {
            return res.notFound('The user is not found.');
        }
        res.view('profile', { data });
    } catch (error) {
        res.serverError(error);
    }
  }

};

