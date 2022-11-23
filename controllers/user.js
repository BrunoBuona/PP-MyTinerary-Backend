const User = require('../models/User')

const controller = {

    create: async (req,res) => {
        try{
            let new_user = await User.create(req.body);
            res.status(201).json({
                id: new_user._id,
                success: true,
                massage: 'The user was successfully created.',
            });
        }catch(error) {
            res.status(400).json({
                success: false,
                massage: error.message,
            });
        }
    },
};
module.exports = controller;